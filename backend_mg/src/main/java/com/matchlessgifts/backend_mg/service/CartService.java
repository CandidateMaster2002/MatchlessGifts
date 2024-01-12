package com.matchlessgifts.backend_mg.service;

import com.matchlessgifts.backend_mg.dao.CartDao;
import com.matchlessgifts.backend_mg.dao.ProductsDao;
import com.matchlessgifts.backend_mg.dao.UsersDao;
import com.matchlessgifts.backend_mg.model.Cart;
import com.matchlessgifts.backend_mg.model.Product;
import com.matchlessgifts.backend_mg.model.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    CartDao cartDao;

    @Autowired
    ProductsDao productsDao;

    @Autowired
    UsersDao usersDao;



    @Transactional
    public void deleteCartsByProductId(int productId) {
        cartDao.deleteByProductIdSQL(productId);
    }
    public void addToCart(int userId, int productId, int quantity) throws Exception {


        Optional<User> optionalUser = usersDao.findById(userId);
        Optional<Product> optionalProduct = productsDao.findById(productId);

        if (optionalUser.isEmpty() || optionalProduct.isEmpty()) {

            System.out.println("line 39 in service");
            throw new Exception("User or Product not found");
        }

        User user=optionalUser.get();

        Product product = optionalProduct.get();

        Cart existingCart = cartDao.findByUserAndProduct(user, product);

        if (existingCart != null) {
            // Update quantity if the entry already exists
            existingCart.setQuantity(existingCart.getQuantity() + quantity);
           cartDao.save(existingCart);
           return;
        } else {
            // Create a new entry if it doesn't exist

            Cart newCart = new Cart();
            newCart.setUser(user);
            newCart.setProduct(product);
            newCart.setQuantity(quantity);
            cartDao.save(newCart);
            return;
        }
    }

    public void deleteFromCart(int cartId) throws Exception {

        try {
            // Check if the cart item exists
            Optional<Cart> cartOptional = cartDao.findById(cartId);

            if (cartOptional.isPresent()) {

                cartDao.deleteById(cartId);
            } else {
                // If not found, throw a custom exception
                throw new Exception("Cart item with ID " + cartId + " not found.");
            }

        } catch (Exception e) {
            // Handle any unexpected exceptions
            throw new Exception("Error deleting cart item with ID " + cartId, e);
        }
    }

    public void addTheAmount(int cartId,int amount) throws Exception {

        try {
            // Check if the cart item exists
            Optional<Cart> cartOptional = cartDao.findById(cartId);

            if (cartOptional.isPresent()) {
                // If exists, update the quantity
                Cart cartItem = cartOptional.get();
                int currentQuantity = cartItem.getQuantity();
                cartItem.setQuantity(currentQuantity + amount);

                // Save the updated cart item
                cartDao.save(cartItem);
            } else {
                // If not found, throw a custom exception
                throw new Exception("Cart item with ID " + cartId + " not found.");
            }

        } catch (Exception e) {
            // Handle any unexpected exceptions
            throw new Exception("Error updating quantity for cart item with ID " + cartId, e);
        }
    }

    public List<Cart> getCartByUserId(int userId) {
        try {
            return cartDao.findByUserUserid(userId);
        } catch (Exception e) {
            throw new RuntimeException("Error retrieving cart entries for user id: " + userId, e);
        }
    }
}
