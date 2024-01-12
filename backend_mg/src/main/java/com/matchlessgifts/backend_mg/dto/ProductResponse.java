package com.matchlessgifts.backend_mg.dto;

import lombok.Data;

import java.util.List;

@Data
public class ProductResponse {
    private List<ProductDTO> content;
    private int  pageNo;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private boolean lastPage;

}
