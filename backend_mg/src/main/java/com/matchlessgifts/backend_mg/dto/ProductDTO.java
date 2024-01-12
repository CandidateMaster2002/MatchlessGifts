package com.matchlessgifts.backend_mg.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ProductDTO {

    private Integer id;
    private String name;
    private int price;
    private String details;
    private String category;
    private String brand;
    private int original_price;
    private String img_url;
    private LocalDateTime arrivalDateTime;

}
