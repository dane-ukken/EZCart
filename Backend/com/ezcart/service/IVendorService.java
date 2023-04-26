package com.ezcart.service;

import java.util.List;
import com.ezcart.dto.VendorDTO;
import com.ezcart.pojos.Vendor;

public interface IVendorService {
    public List<Vendor> getAllVendors();
    int addVendor(Vendor v);
    int deleteVendor(int id);
    int updateVendorDetails(Vendor v, int id);

}
