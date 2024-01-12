package com.matchlessgifts.backend_mg.controller;

import com.matchlessgifts.backend_mg.dto.ChangePasswordDTO;
import com.matchlessgifts.backend_mg.dto.UserDTO;
import com.matchlessgifts.backend_mg.model.User;
import com.matchlessgifts.backend_mg.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.matchlessgifts.backend_mg.dto.LoginDTO;

@RestController()
@RequestMapping("users")
@CrossOrigin
public class UserController {
    @Autowired
    UsersService usersService;

    @PostMapping("signup")
    public ResponseEntity<Object> signup(@RequestBody User user){

        return usersService.signup(user);

    }

    @PostMapping("login")
    public ResponseEntity<Object> login(@RequestBody LoginDTO loginDTO){
return usersService.login(loginDTO);
    }


    @GetMapping("userbyemail/{email}")
    public ResponseEntity<Object> getUserByEmail(@PathVariable String email){
//        System.out.println(email);
        return usersService.getUserByEmail(email);
    }

    @GetMapping("userbyemailpassword")
    public ResponseEntity<Object> getUserByEmailPassword(@RequestBody LoginDTO loginDTO){
        return usersService.getUserByEmailPassword(loginDTO);
    }

    @GetMapping("getbyid/{userid}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable int userid){
        return usersService.getUserById(userid);
    }

    @PostMapping("updateProfile")
    public ResponseEntity<String> updateUser(@RequestBody UserDTO userDTO) {
        try {
            usersService.updateUser(userDTO);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Failed to update user: " + e.getMessage());
        }
    }

    @GetMapping("/check-email")
    public ResponseEntity<Boolean> doesEmailExist(@RequestParam String email) {
        try {
            if (usersService.doesEmailExist(email)) {
                return ResponseEntity.ok(true);
            } else {
                return ResponseEntity.ok(false);
            }
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordDTO changePasswordDTO) {
        try {
            usersService.changeUserPassword(changePasswordDTO.getEmail(), changePasswordDTO.getPassword());
            return ResponseEntity.ok("Password changed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error changing password");
        }
    }

}

