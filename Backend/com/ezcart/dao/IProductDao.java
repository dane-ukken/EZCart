package com.ezcart.dao;

import java.util.List;

import com.ezcart.pojos.Product;

public interface IProductDao {
	
	public List<Product> getProductCategory();
	public List<Product> getProductSubCategory();
	public List<Product> getAllProducts();
	public List<Product> getProductBySubcategory(int subcategoryId);
	public List<Product> getSubcategoryByCategory(int categoryId);
	
}
