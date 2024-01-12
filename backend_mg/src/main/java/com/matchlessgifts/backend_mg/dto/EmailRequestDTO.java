package com.matchlessgifts.backend_mg.dto;

import com.matchlessgifts.backend_mg.model.Address;
import lombok.Data;

@Data
public class EmailRequestDTO {

    private String to;
    private String subject;
    private String body;


}





