package com.ezcart.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.ezcart.pojos.Vendor;


@Repository
public class VendorDaoImpl implements IVendorDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Vendor> getAllVendors() {
        String getQuery = "select * from Vendor";
        return jdbcTemplate.query(getQuery, new VendorRowMapper());
    }
    @Override
    public int addVendor(Vendor v) {
        String insertQuery = "insert into Vendor(VendorID, StoreAddress ) values(?,?)";
        return jdbcTemplate.update(insertQuery, v.getVendorID(), v.getStoreAddress());
    }

    @Override
    public int deleteVendor(int id){
        String deleteQuery = "delete from Vendor where VendorID = ?";
        return jdbcTemplate.update(deleteQuery, id);
    }

    @Override
    public int updateVendorDetails(Vendor v, int id) {
        String updateQuery = "update Vendor set StoreAddress = ? where VendorId = ?";
        return jdbcTemplate.update(updateQuery, v.getStoreAddress(), id);

    }

}

