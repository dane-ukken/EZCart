package com.ezcart.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.ezcart.pojos.Product;

@Repository
public class ProductDaoImpl implements IProductDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<Product> getProductCategory() {
		String getCategoryQuery = "select * from Category";
		return jdbcTemplate.query(getCategoryQuery, new CategoryRowMapper());
	}

	@Override
	public List<Product> getProductSubCategory() {
		String getSubCategoryQuery = "select * from Subcategory";
		return jdbcTemplate.query(getSubCategoryQuery, new SubCategoryRowMapper());
	}

	@Override
	public List<Product> getAllProducts() {
		String getProductQuery = "select * from Product";
		return jdbcTemplate.query(getProductQuery, new ProductRowMapper());
	}

	@Override
	public List<Product> getProductBySubcategory(int subcategoryId) {
		String getProductBySubcategory = "select * from V_ProductSubcategorySelect where subcategoryid = ?";
		return jdbcTemplate.query(getProductBySubcategory , new ProductBySubcatRowMapper() , subcategoryId);
	}

	@Override
	public List<Product> getSubcategoryByCategory(int categoryId) {
		String getSubcategory = "select * from V_SubcategoryByCategory where categoryid = ?";
		return jdbcTemplate.query(getSubcategory , new SubCategoryRowMapper(), categoryId);
	}
	
	
	

}
