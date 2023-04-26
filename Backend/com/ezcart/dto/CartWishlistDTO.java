package com.ezcart.dto;

public class CartWishlistDTO {
	
	private int productId;
	private String productName;
	private String imageUrl;
	private int quantity;
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "CartDTO [productId=" + productId + ", productName=" + productName + ", imageUrl=" + imageUrl
				+ ", quantity=" + quantity + "]";
	}
	
	

}
