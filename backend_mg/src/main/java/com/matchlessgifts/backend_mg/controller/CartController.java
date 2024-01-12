package com.matchlessgifts.backend_mg.controller;


import com.matchlessgifts.backend_mg.model.Cart;
import com.matchlessgifts.backend_mg.model.User;
import com.matchlessgifts.backend_mg.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("cart")
@CrossOrigin
public class CartController {
    @Autowired
    CartService cartService;


    @GetMapping("{userId}/add/{productId}/{quantity}")
    public ResponseEntity<Boolean> addToCart(
            @PathVariable int userId,
            @PathVariable int productId,
            @PathVariable int quantity
    )

    {
        try {
            cartService.addToCart(userId, productId, quantity);

            return ResponseEntity.ok(true);

        } catch (Exception e) {
            // Other unexpected errors, return 500 Internal Server Error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("{userId}/getCart")
    public ResponseEntity <List<Cart>> getCartByUserId(@PathVariable int userId){

        try {
            List<Cart> cartEntries = cartService.getCartByUserId(userId);

            if (cartEntries.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(cartEntries, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("delete/{cartId}")
    public ResponseEntity<Boolean> deleteFromCart(
            @PathVariable int cartId
    )

    {
        try {
            cartService.deleteFromCart(cartId);

            return ResponseEntity.ok(true);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("plusone/{cartId}")
    public ResponseEntity<Boolean> incrementByOne(
            @PathVariable int cartId
    )

    {
        try {
            cartService.addTheAmount(cartId,1);

            return ResponseEntity.ok(true);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("minusone/{cartId}")
    public ResponseEntity<Boolean> decrementByOne(
            @PathVariable int cartId
    )

    {
        try {
            cartService.addTheAmount(cartId,-1);

            return ResponseEntity.ok(true);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/deleteByProductId/{productId}")
    public ResponseEntity<String> deleteCartByProductId(@PathVariable int productId) {
        try {
            cartService.deleteCartsByProductId(productId);
            return ResponseEntity.ok("Carts with productId " + productId + " deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting carts");
        }
    }






}
