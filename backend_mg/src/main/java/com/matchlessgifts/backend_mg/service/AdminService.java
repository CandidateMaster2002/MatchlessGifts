package com.matchlessgifts.backend_mg.service;

import com.matchlessgifts.backend_mg.dto.LoginDTO;
import com.matchlessgifts.backend_mg.dao.AdminDao;
import com.matchlessgifts.backend_mg.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    AdminDao adminDao;


    public ResponseEntity<LoginDTO> getAdminCredentialsById(int id) {
        Optional<Admin> adminOptional = adminDao.findById(id);

        if (adminOptional.isPresent()) {
            Admin admin = adminOptional.get();
            LoginDTO loginDTO = new LoginDTO(admin.getEmail(), admin.getPassword());
            return new ResponseEntity<>(loginDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
}

}
