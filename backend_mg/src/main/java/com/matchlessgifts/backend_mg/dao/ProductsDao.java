package com.matchlessgifts.backend_mg.dao;

import com.matchlessgifts.backend_mg.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsDao extends JpaRepository<Product, Integer> {


    List<Product> findAllByCategory(String category);


    @Query(value = "SELECT * FROM product p " +
            "WHERE (:minPrice IS NULL OR p.price >= :minPrice) " +
            "AND (:maxPrice IS NULL OR p.price <= :maxPrice) "+
            "AND (:isBrandsPresent = false OR p.brand IN (:brands) ) " +
            "AND (:isCategoriesPresent = false OR p.category IN :categories) " +
            "AND (:search IS NULL OR " +
            "   LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
            "   LOWER(p.brand) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
            "   LOWER(p.category) LIKE LOWER(CONCAT('%', :search, '%'))) " +
            "ORDER BY "
            + "CASE WHEN :sortingMethod = 'Price:Low to High' THEN p.price END ASC, "
            + "CASE WHEN :sortingMethod = 'Price:High to Low' THEN p.price END DESC"

            , nativeQuery = true)

    List<Product> getFilteredProducts(
            @Param("brands") List<String> brands,
            @Param("isBrandsPresent") Boolean isBrandsPresent,
            @Param("categories") List<String> categories,
            @Param("isCategoriesPresent") Boolean isCategoriesPresent,
            @Param("minPrice") Integer minPrice,
            @Param("maxPrice") Integer maxPrice,
            @Param("sortingMethod") String sortingMethod,
            @Param("search") String search
//            @Param("isBrandsPresent") Boolean isBrandsPresent
    );


    public List<Product> findByBrand(String brand);
}
