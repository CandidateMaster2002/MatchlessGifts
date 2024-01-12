package com.matchlessgifts.backend_mg.dao;

import com.matchlessgifts.backend_mg.model.Orders;
import com.matchlessgifts.backend_mg.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDao extends JpaRepository <Orders,Integer> {

    List<Orders> findByUser(User user);
}
