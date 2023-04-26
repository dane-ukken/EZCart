package com.ezcart.dao;

import java.util.List;

import com.ezcart.pojos.Product;

public interface IProductDao {
	
	public List<Product> getProductCategory();
	public List<Product> getProductSubCategory();
	public List<Product> getAllProducts();
	public List<Product> getProductBySubcategory(int subcategoryId);
	public List<Product> getSubcategoryByCategory(int categoryId);	
	public int addProduct(ProductDTO product);
	public int deleteProduct(int productId);
	public int updateProduct(ProductDTO product);
	public int addVendorForNewProduct(ProductDTO product , int productId);
	public List<ProductDetailsDTO> getProductById(int productId);
	
}
