package com.ezcart.service;

import com.ezcart.dao.IUserDao;
import com.ezcart.pojos.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ezcart.dao.IVendorDao;
import com.ezcart.dto.VendorDTO;
import com.ezcart.pojos.CustomerCart;
import com.ezcart.pojos.CustomerWishlist;
import com.ezcart.pojos.Vendor;

import java.util.List;

@Service
@Transactional
public class VendorServiceImpl implements IVendorService {
    @Autowired
    private IVendorDao vendorDao;

    @Override
    public List<Vendor> getAllVendors(){
        return vendorDao.getAllVendors();}
    @Override
        public int addVendor(Vendor v) {
            return vendorDao.addVendor(v);

        }
    @Override
        public int deleteVendor(int id){
        return vendorDao.deleteVendor(id);
    }

    @Override
    public int updateVendorDetails(Vendor v, int id){
        return  vendorDao.updateVendorDetails(v,id);
    }

}