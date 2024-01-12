package com.matchlessgifts.backend_mg.dto;

import lombok.Data;
import java.util.List;

@Data
public class OrderResponseDTO {
    private int orderId;
    private List<OrderItemDTO> products;
    private String orderStatus;

    public OrderResponseDTO(int orderId, List<OrderItemDTO> products, String orderStatus) {
        this.orderId = orderId;
        this.products = products;
        this.orderStatus = orderStatus;
    }

}


