package com.ezcart.pojos;

public class CustomerWishlist {

	private int productId;
	private String productName;
	private String imageUrl;
	private int customerId;

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

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	@Override
	public String toString() {
		return "CustomerCart [productId=" + productId + ", productName=" + productName + ", imageUrl=" + imageUrl
				+ ", customerId=" + customerId + "]";
	}

}
