package com.matchlessgifts.backend_mg.dao;

import com.matchlessgifts.backend_mg.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminDao extends JpaRepository <Admin,Integer> {

}
