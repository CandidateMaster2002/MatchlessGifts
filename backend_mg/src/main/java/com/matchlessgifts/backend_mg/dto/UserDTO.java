package com.matchlessgifts.backend_mg.dto;

import com.matchlessgifts.backend_mg.model.Address;
import lombok.Data;


@Data

public class UserDTO {

    private Integer userid;

    private String name;

    private String email;

    private String password;
    private String mobileno;

    private Address address;


}


