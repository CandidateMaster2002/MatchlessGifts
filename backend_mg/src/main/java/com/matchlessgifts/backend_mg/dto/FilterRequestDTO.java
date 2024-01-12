package com.matchlessgifts.backend_mg.dto;

import com.matchlessgifts.backend_mg.model.Address;
import lombok.Data;


@Data

public class FilterRequestDTO {

    private int pageNo;
    private int pageSize;
    private String sortBy;
    private FilterOptionsDTO filterOptionsDTO;


}


