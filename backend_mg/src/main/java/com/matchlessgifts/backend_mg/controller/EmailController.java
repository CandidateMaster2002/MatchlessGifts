package com.matchlessgifts.backend_mg.controller;


import com.matchlessgifts.backend_mg.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.matchlessgifts.backend_mg.dto.EmailRequestDTO;
import org.springframework.web.bind.annotation.*;
@RestController()
@RequestMapping("email")
@CrossOrigin
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequestDTO emailRequestDTO) {
        try {
            emailService.sendEmail(emailRequestDTO.getTo(), emailRequestDTO.getSubject(), emailRequestDTO.getBody());
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            // Log the exception or handle it according to your needs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error sending email: " + e.getMessage());
        }
    }

}
