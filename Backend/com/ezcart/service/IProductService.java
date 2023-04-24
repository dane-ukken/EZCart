package com.ezcart.service;

import java.util.List;

import com.ezcart.pojos.Product;

public interface IProductService {
	
	public List<Product> getProductCategory();
	public List<Product> getSubProductCategory();
	public List<Product> getAllProducts();
	public List<Product> getProductBySubcategory(int subcategoryId);
	public List<Product> getSubcategoryByCategory(int categoryId);

}
