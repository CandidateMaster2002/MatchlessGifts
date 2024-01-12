package com.matchlessgifts.backend_mg.dto;

import com.matchlessgifts.backend_mg.model.Address;
import lombok.Data;


@Data

public class AddressDTO {

    private Integer addressId;
    private String street;
    private String city;
    private String state;
    private String pincode;
}


