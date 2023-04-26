package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.ezcart.dto.UserDTO;
import com.ezcart.dto.VendorDTO;
import com.ezcart.pojos.Vendor;

import org.springframework.jdbc.core.RowMapper;
public class VendorRowMapper implements RowMapper<Vendor> {
    @Override
    public Vendor mapRow(ResultSet rs, int rowNum) throws SQLException {

    	Vendor u = new Vendor();
        u.setVendorID(rs.getInt("vendorId"));
        u.setStoreAddress(rs.getString("storeAddress"));
        return u;
    }
}
