package com.ezcart.dto;

import java.util.List;

import com.ezcart.pojos.Product;

public class ProductDetailsDTO {
	
	public Product productDetails;
	public UserDTO vendorName;
	public Product getProductDetails() {
		return productDetails;
	}
	public void setProductDetails(Product productDetails) {
		this.productDetails = productDetails;
	}
	public UserDTO getVendorName() {
		return vendorName;
	}
	public void setVendorName(UserDTO userDTO) {
		this.vendorName = userDTO;
	}
	
	@Override
	public String toString() {
		return "ProductDetailsDTO [productDetails=" + productDetails + ", vendorName=" + vendorName + "]";
	}
	
	

}
