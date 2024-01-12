package com.matchlessgifts.backend_mg.controller;


import com.matchlessgifts.backend_mg.dao.CartDao;
import com.matchlessgifts.backend_mg.dao.ProductsDao;
import com.matchlessgifts.backend_mg.dto.FilterOptionsDTO;
import com.matchlessgifts.backend_mg.dto.FilterRequestDTO;
import com.matchlessgifts.backend_mg.dto.ProductDTO;
import com.matchlessgifts.backend_mg.dto.ProductResponse;
import com.matchlessgifts.backend_mg.model.Product;
import com.matchlessgifts.backend_mg.service.CartService;
import com.matchlessgifts.backend_mg.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("products")
@CrossOrigin
public class ProductsController {

    @Autowired
    ProductsService productsService;

    @Autowired
    ProductsDao productsDao;

    @Autowired
    CartService cartService;



@PostMapping("addproduct")
public ResponseEntity<Product> addProduct(@RequestBody Product product){
    return productsService.addProduct(product);
}

@PostMapping("update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product){
        return  productsService.updateProduct(product);
}

@GetMapping("allproducts")
public ResponseEntity<List<ProductDTO>> getAllProducts(){
    return productsService.getAllProducts();
}

@GetMapping("getbyid/{productId}")

    public ResponseEntity<Product> getProductById(@PathVariable("productId") Integer id){
        return productsService.getProductById(id);
}

@GetMapping("{category}")
    public List<Product> getProductsByCategory(@PathVariable String category){

        return productsService.getProductByCategory(category);
}


@PostMapping("/paginated/{pageNo}")
    public ResponseEntity<ProductResponse> getAllProductsFilteredAndPaginated(
            @RequestBody FilterOptionsDTO filterOptionsDTO,@PathVariable("pageNo") Integer pageNo
    ) {

        int pageSize =12;

        return productsService.getAllProductsFiltered(pageNo, pageSize,filterOptionsDTO);
    }




@PostMapping("allproducts/filters")
    public ResponseEntity<List<ProductDTO>> getFilteredProducts(@RequestBody FilterOptionsDTO filterOptionsDTO){
    return new ResponseEntity<>(productsService.getFilteredProducts(filterOptionsDTO), HttpStatus.OK);
}

    @GetMapping("deleteProduct/{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable int productId) {
        try {

            cartService.deleteCartsByProductId(productId);




                productsService.deleteProduct(productId);

                return ResponseEntity.ok("Product deleted successfully");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("the error occurred while deleting the product");
        }
    }



}
