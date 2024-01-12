package com.matchlessgifts.backend_mg.model;
import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int orderItemId;
    private int productId;
    private String productName;
    private String productBrand;
    private String productCategory;
    private int productPrice;
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders order;

}
