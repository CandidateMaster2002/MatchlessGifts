package com.matchlessgifts.backend_mg.dao;

import com.matchlessgifts.backend_mg.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface OrderItemDao extends JpaRepository <OrderItem,Integer> {

    List<OrderItem> findByOrder(Orders order);
}