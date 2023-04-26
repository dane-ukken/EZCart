package com.ezcart.dao;

import com.ezcart.dto.VendorDTO;
import com.ezcart.pojos.Vendor;

import java.util.List;

public interface IVendorDao {
//    public VendorDTO getVendorByID(int VendorID);
    public List<Vendor> getAllVendors();
    int addVendor(Vendor v);
    int deleteVendor(int id);
    int updateVendorDetails(Vendor v, int id);



}