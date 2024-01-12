package com.matchlessgifts.backend_mg.controller;


import com.matchlessgifts.backend_mg.model.Orders;
import com.matchlessgifts.backend_mg.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.matchlessgifts.backend_mg.dto.*;
import java.util.List;

@RestController()
@RequestMapping("order")
@CrossOrigin
public class OrderController {


    @Autowired
    OrderService orderService;

    @PostMapping("{userId}/createOrder")
    public ResponseEntity<OrderResponseDTO> createOrder(@PathVariable int userId,
                                                        @RequestBody List<OrderItemDTO> orderItems
    ) throws Exception {



        OrderResponseDTO createdOrder = orderService.createOrder(userId, orderItems, "pending");
        return ResponseEntity.ok(createdOrder);

    }


    @GetMapping("{userId}/getOrders")
    public ResponseEntity<List<OrderResponseDTO>> getOrderHistory(@PathVariable int userId) {
        try {
            List<OrderResponseDTO> orderResponseDTOs = orderService.getOrderHistory(userId);
            return ResponseEntity.ok(orderResponseDTOs);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("getAllOrders")
    public ResponseEntity<List<OrderResponseDTO>> getAllOrders() {
        try {
            List<OrderResponseDTO> orderResponseDTOs = orderService.getAllOrders();
            return ResponseEntity.ok(orderResponseDTOs);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/changeStatus/{orderId}")
    public ResponseEntity<String> changeStatus(@PathVariable int orderId, @RequestBody String status) {
        try {
            orderService.changeStatus(orderId, status);
            return new ResponseEntity<>("Status changed successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error changing status: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}