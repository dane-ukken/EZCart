package com.ezcart.pojos;

public class Product {
	
	private int productId;
	private String productName;
	private String productDesc;
	private String imageUrl;
	private int subCategoryId;
	private String subCategoryName;
	private int categoryId;
	public String categoryName;
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int i) {
		this.productId = i;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public int getSubCategoryId() {
		return subCategoryId;
	}
	public void setSubCategoryId(int subCategoryId) {
		this.subCategoryId = subCategoryId;
	}	
	public String getSubCategoryName() {
		return subCategoryName;
	}
	public void setSubCategoryName(String subCategoryName) {
		this.subCategoryName = subCategoryName;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productDesc=" + productDesc
				+ ", imageUrl=" + imageUrl + ", subCategoryId=" + subCategoryId + ", subCategoryName=" + subCategoryName
				+ ", categoryId=" + categoryId + ", categoryName=" + categoryName + "]";
	}
	
	
}
