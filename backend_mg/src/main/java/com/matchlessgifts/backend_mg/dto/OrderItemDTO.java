package com.matchlessgifts.backend_mg.dto;

import lombok.Data;

@Data
public class OrderItemDTO {

    private int productId;
    private String productName;
    private String productBrand;
    private String productCategory;
    private int price;
    private int quantity;

}


