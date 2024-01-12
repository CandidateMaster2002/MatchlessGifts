package com.matchlessgifts.backend_mg.dao;

import com.matchlessgifts.backend_mg.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsersDao extends JpaRepository <User,Integer> {

    boolean existsByEmail(String email);

    User findByEmail(String email);

    Optional<User> findOneByEmailAndPassword(String email, String encodedPassword);
}
