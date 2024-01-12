package com.matchlessgifts.backend_mg.service;

import com.matchlessgifts.backend_mg.dto.LoginDTO;
import com.matchlessgifts.backend_mg.dao.UsersDao;
import com.matchlessgifts.backend_mg.dto.UserDTO;
import com.matchlessgifts.backend_mg.dto.AddressDTO;
import com.matchlessgifts.backend_mg.model.Address;
import com.matchlessgifts.backend_mg.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.*;

@Service
public class UsersService {

    @Autowired
    UsersDao usersDao;

    @Autowired
    ModelMapper modelMapper;


    public ResponseEntity<Object> signup(User user) {
        if (usersDao.existsByEmail(user.getEmail())) {
            System.out.println(user.getEmail() + "exists");
            return new ResponseEntity<>("Email already exists", HttpStatus.CONFLICT);
        }

        User savedUser = usersDao.save(user);
        System.out.println(savedUser);

        // Return the generated user ID
        return new ResponseEntity<>(savedUser.getUserid(), HttpStatus.CREATED);
    }

    public ResponseEntity<Object> login(LoginDTO loginDTO) {
        String msg = "";
        User user1 = usersDao.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = password.equals(encodedPassword);
//            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = usersDao.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new ResponseEntity<>("Logged in successfully", HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("Error while logging in .Please try again", HttpStatus.FORBIDDEN);
                }
            } else {
                return new ResponseEntity<>("Incorrect password entered", HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new ResponseEntity<>("Email does not exist", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Object> getUserByEmail(String email) {
        return new ResponseEntity<>(usersDao.findByEmail(email), HttpStatus.OK);
//        try{
//            return new ResponseEntity<>(usersDao.findByEmail(email),HttpStatus.OK);
//        }
//        catch(Exception e) {
//            return new ResponseEntity<>(new User(),HttpStatus.NOT_FOUND);
//        }
    }

    public ResponseEntity<Object> getUserByEmailPassword(LoginDTO loginDTO) {
        return new ResponseEntity<>(usersDao.findOneByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword()), HttpStatus.OK);
    }

    public ResponseEntity<UserDTO> getUserById(int userid) {
        User user = usersDao.findById(userid).orElse(null);

        if (user != null) {
            UserDTO userDTO = modelMapper.map(user, UserDTO.class);
            return new ResponseEntity<>(userDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public void updateUser(UserDTO userDTO) throws Exception {
        // Validate user input if necessary

        // Fetch the existing user from the database
        User existingUser = usersDao.findById(userDTO.getUserid())
                .orElseThrow(() -> new Exception("User not found"));

        // Update user details
        existingUser.setName(userDTO.getName());
        existingUser.setEmail(userDTO.getEmail());
        existingUser.setMobileno(userDTO.getMobileno());

        Address address = userDTO.getAddress();
        if (address != null) {
            // Update address details
            Address existingAddress = existingUser.getAddress();
            existingAddress.setStreet(address.getStreet());
            existingAddress.setCity(address.getCity());
            existingAddress.setState(address.getState());
            existingAddress.setPincode(address.getPincode());
        }
        usersDao.save(existingUser);
    }

    public boolean doesEmailExist(String email) {
        Optional<User> user = Optional.ofNullable(usersDao.findByEmail(email));
        return user.isPresent();
    }

    public void changeUserPassword(String email, String newPassword) throws Exception {
        Optional<User> userOptional = Optional.ofNullable(usersDao.findByEmail(email));

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setPassword(newPassword);
            usersDao.save(user);
        } else {
            throw new Exception("User with email " + email + " not found");
        }
    }
}
