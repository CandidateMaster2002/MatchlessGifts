package com.matchlessgifts.backend_mg.service;

import com.matchlessgifts.backend_mg.dto.FilterOptionsDTO;
import com.matchlessgifts.backend_mg.dto.ProductDTO;
import com.matchlessgifts.backend_mg.dto.ProductResponse;
import com.matchlessgifts.backend_mg.dao.ProductsDao;
import com.matchlessgifts.backend_mg.model.Product;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductsService {

    @Autowired
    ProductsDao productsDao;

    @Autowired
    ModelMapper modelMapper;


    public ResponseEntity<Product> addProduct(Product product) {
        try {
            return new ResponseEntity<>(productsDao.save(product), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new Product(), HttpStatus.BAD_REQUEST);
        }


    }

    public ResponseEntity<Product> updateProduct(Product product) {
        if (!productsDao.existsById(product.getId())) {
            return new ResponseEntity<>(new Product(), HttpStatus.NOT_FOUND);
        }
        return addProduct(product);
    }

    public ResponseEntity<Product> getProductById(Integer id) {

        if (!productsDao.existsById(id)) {
            return new ResponseEntity<>(new Product(), HttpStatus.NOT_FOUND);
        }
        try {
            return new ResponseEntity<>(productsDao.findById(id).get(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new Product(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    public List<Product> getProductByCategory(String category) {
        return productsDao.findAllByCategory(category);
    }

    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        return new ResponseEntity<List<ProductDTO>>(productsDao.findAll().stream()
                .map(this::convertEntityToDTO)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    public ResponseEntity<ProductResponse> getAllProductsFiltered(int pageNo, int pageSize, FilterOptionsDTO filterOptionsDTO) {

        // Fetch filtered data based on filter options
        List<ProductDTO> filteredProducts = getFilteredProducts(filterOptionsDTO);

        // Calculate start index for pagination
        int startIdx = (pageNo - 1) * pageSize;

        // Calculate end index for pagination
        int endIdx = Math.min(startIdx + pageSize, filteredProducts.size());

        // Get the sublist for the current page
        List<ProductDTO> paginatedProducts = filteredProducts.subList(startIdx, endIdx);

        // Create a ProductResponse with paginated data
        ProductResponse productResponse = new ProductResponse();
        productResponse.setContent(paginatedProducts);
        productResponse.setPageNo(pageNo);
        productResponse.setPageSize(pageSize);
        productResponse.setTotalElements(filteredProducts.size());
        productResponse.setTotalPages((int) Math.ceil((double) filteredProducts.size() / pageSize));
        productResponse.setLastPage(endIdx == filteredProducts.size());

        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }



    private ProductDTO convertEntityToDTO(Product product) {
        return modelMapper.map(product, ProductDTO.class);



    }

    public List<ProductDTO> getFilteredProducts (FilterOptionsDTO filterOptionsDTO){

        boolean brandsNotEmpty=filterOptionsDTO.getBrands() != null && !filterOptionsDTO.getBrands().isEmpty();
        boolean categoriesNotEmpty=filterOptionsDTO.getCategories() != null && !filterOptionsDTO.getCategories().isEmpty();
        return productsDao.getFilteredProducts(
                filterOptionsDTO.getBrands(),
                brandsNotEmpty,
                filterOptionsDTO.getCategories(),
                categoriesNotEmpty,
                filterOptionsDTO.getMinPrice(),
                filterOptionsDTO.getMaxPrice(),
                filterOptionsDTO.getSortingMethod(),
                filterOptionsDTO.getSearch()
        ).stream()
                .map(this::convertEntityToDTO)
                .collect(Collectors.toList());
    }


    @Transactional
    public void deleteProduct(int productId) throws Exception {
        Optional<Product> productOptional = productsDao.findById(productId);

        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            productsDao.delete(product);
        } else {
            throw new Exception("Product with id " + productId + " not found");
        }
    }
}
