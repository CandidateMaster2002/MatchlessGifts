package com.matchlessgifts.backend_mg.model;
//import jakarta.persistence.*;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Data
@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;

    private String orderStatus;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
