package com.ezcart.dto;

public class VendorDTO {

    private int VendorID;
    private String StoreAddress;

    public int getVendorID(){return VendorID;}
    public void setVendorID(int VendorID){this.VendorID=VendorID;}

    public String getStoreAddress() {
        return StoreAddress;
    }
    public void setStoreAddress(String StoreAddress) {
        this.StoreAddress = StoreAddress;
    }

    @Override
    public String toString() {
        return "Vendor [VendorID=" + VendorID + ", StoreAddress=" + StoreAddress + "]";
    }
}
