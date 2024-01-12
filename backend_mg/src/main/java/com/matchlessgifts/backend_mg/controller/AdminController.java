package com.matchlessgifts.backend_mg.controller;

import com.matchlessgifts.backend_mg.dto.LoginDTO;
import com.matchlessgifts.backend_mg.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("admin")
@CrossOrigin
public class AdminController {
    @Autowired
    AdminService adminService;



    @GetMapping("credentials")
    public ResponseEntity<LoginDTO> getAdminCredentials() {
//        LoginDTO emptyLoginDTO = new LoginDTO("harshiscoding@gmail.com", "87654321");
//        return ResponseEntity.ok(emptyLoginDTO);
       return adminService.getAdminCredentialsById(1);
    }

}
