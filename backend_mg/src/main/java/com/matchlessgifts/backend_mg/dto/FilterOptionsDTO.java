package com.matchlessgifts.backend_mg.dto;
import lombok.Data;

import java.util.*;

@Data
public class FilterOptionsDTO {
    private String sortingMethod;
    private List<String> categories;
    private List<String> brands;
    private Integer minPrice;
    private Integer maxPrice;
    private String search;
}
