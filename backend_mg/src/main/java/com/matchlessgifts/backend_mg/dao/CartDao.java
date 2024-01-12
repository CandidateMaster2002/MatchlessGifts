package com.matchlessgifts.backend_mg.dao;

import com.matchlessgifts.backend_mg.model.Cart;
import com.matchlessgifts.backend_mg.model.Product;
import com.matchlessgifts.backend_mg.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CartDao extends JpaRepository <Cart,Integer> {


    Cart findByUserAndProduct(User user, Product product);
    List<Cart> findByUserUserid(Integer userId);

    @Modifying
@Query(value = "DELETE FROM cart WHERE product_id = :productId", nativeQuery = true)
void deleteByProductIdSQL(@Param("productId") int productId);


    boolean existsByProductId(int productId);
}