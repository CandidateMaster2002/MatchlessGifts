package com.matchlessgifts.backend_mg.service;
import com.matchlessgifts.backend_mg.dto.*;
import com.matchlessgifts.backend_mg.dao.OrderDao;
import com.matchlessgifts.backend_mg.dao.OrderItemDao;
import com.matchlessgifts.backend_mg.dao.UsersDao;
import com.matchlessgifts.backend_mg.model.Orders;
import com.matchlessgifts.backend_mg.model.User;
import jakarta.persistence.criteria.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.matchlessgifts.backend_mg.model.OrderItem;
import java.util.*;
import java.util.stream.*;

@Service
public class OrderService {

@Autowired
    OrderDao orderDao;
@Autowired
    UsersDao usersDao;

@Autowired
OrderItemDao orderItemDao;
    public OrderResponseDTO createOrder(int userId, List<OrderItemDTO> orderItems, String orderStatus) throws Exception {
        try {
            Orders orders = new Orders();
//            orders.setProducts(convertToProducts(orderItems,orders));
            orders.setOrderStatus(orderStatus);

            User user= usersDao.findById(userId).get();
            orders.setUser(user);


            orderDao.save(orders);
            saveOrderItem(orderItems,orders);


            return new OrderResponseDTO(orders.getOrderId(),orderItems,orders.getOrderStatus());
        } catch (Exception e) {
            throw new Exception("Failed to create order.", e);
        }

    }


    private void saveOrderItem(List<OrderItemDTO> orderItems,Orders order) throws Exception {
        try {
            for (OrderItemDTO item : orderItems) {
                OrderItem orderItem = new OrderItem();
                orderItem.setProductId(item.getProductId());
                orderItem.setProductName(item.getProductName());
                orderItem.setProductCategory(item.getProductCategory());
                orderItem.setProductBrand(item.getProductBrand());
                orderItem.setProductPrice(item.getPrice());
                orderItem.setQuantity(item.getQuantity());
                orderItem.setOrder(order);

                orderItemDao.save(orderItem);
            }

        } catch (Exception e) {
            throw new Exception("Failed to convert order items.", e);
        }

    }

    public List<OrderResponseDTO> getOrderHistory(int userId) throws Exception {
        try {
            User user = usersDao.findById(userId).orElseThrow(() -> new Exception("User not found"));
            List<Orders> orders = orderDao.findByUser(user);

            return orders.stream()
                    .map(order -> mapOrderToDto(order))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            // Handle exceptions and log errors
            e.printStackTrace();
            throw new Exception("Failed to get order history.", e);
        }
    }

    private OrderResponseDTO mapOrderToDto(Orders order) {


        List<OrderItemDTO> orderItems = new ArrayList<>();
        List<OrderItem> orderItemList =orderItemDao.findByOrder(order);

        for (OrderItem orderItem : orderItemList) {
            orderItems.add(mapOrderItemToDto(orderItem));
        }
        System.out.println(orderItemList+"fff");
        System.out.println(order);
        System.out.println("  dkkd ");
        return new OrderResponseDTO(order.getOrderId(),orderItems,order.getOrderStatus());
    }

    private OrderItemDTO mapOrderItemToDto(OrderItem orderItem) {
        OrderItemDTO orderItemDTO = new OrderItemDTO();
        orderItemDTO.setProductId(orderItem.getProductId());
        orderItemDTO.setProductName(orderItem.getProductName());
        orderItemDTO.setProductBrand(orderItem.getProductBrand());
        orderItemDTO.setProductCategory(orderItem.getProductCategory());
        orderItemDTO.setPrice(orderItem.getProductPrice());
        orderItemDTO.setQuantity(orderItem.getQuantity());
        return orderItemDTO;
    }


    public List<OrderResponseDTO> getAllOrders() throws Exception {
        try {

            List<Orders> orders = orderDao.findAll();

            return orders.stream()
                    .map(order -> mapOrderToDto(order))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            // Handle exceptions and log errors
            e.printStackTrace();
            throw new Exception("Failed to get all orders.", e);
        }
    }

    public void changeStatus(int orderId, String status) throws Exception {
        Optional<Orders> optionalOrder = orderDao.findById(orderId);

        if (optionalOrder.isPresent()) {
            Orders order =optionalOrder.get();
            order.setOrderStatus(status);
            orderDao.save(order);
        } else {
            throw new Exception("Order not found with ID: " + orderId);
        }
    }
}
