package com.ezcart.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.ezcart.dto.ProductDTO;
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
		String getSubCategoryQuery = "select s.* , c.CategoryName from Subcategory s, Category c where s.categoryId = c.categoryId ";
		return jdbcTemplate.query(getSubCategoryQuery, new SubCategoryRowMapper());
	}

	@Override
	public List<Product> getAllProducts() {
		String getProductQuery = "select p.*, s.ItemPrice, s.Quantity  from Product p, productsupplies s where p.productid = s.productid;";
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

	@Override
	public int addProduct(ProductDTO product) {
		String addProduct = "insert into Product(ProductName, ProductDescription,ImageUrl, SubcategoryId) values(?,?,?,?)";
		String getId = "select ProductId from Product where ProductName = ?";
		int isSuccess = jdbcTemplate.update(addProduct, product.getProductName(), product.getProductDesc(), 
				product.getImageUrl(), product.getSubCategoryId());
		if(isSuccess != 0) {
			// getting productId for new product added
			List<Product> id = jdbcTemplate.query(getId, new ProductRowMapper(), product.getProductName() );
			addVendorForNewProduct(product, id.get(0).getProductId());
			return isSuccess;
		}else {
			return 0 ;
		}
			
	}

	@Override
	public int deleteProduct(int productId) {
		String deleteProduct = "Delete from product where productId = ?";
		return jdbcTemplate.update(deleteProduct, productId);
	}
	
	@Override
	public int updateProduct(ProductDTO product) {
		String deleteProduct = "update Product set ProductDescription = ? where productId = ? ";
		return jdbcTemplate.update(deleteProduct, product.getProductDesc() , product.getProductId());
	}
	
	// adding vendor for new product added in productSupplies table
	@Override
	public int addVendorForNewProduct(ProductDTO product , int productId) {
		String addVendorProduct = "insert into Vendor values(?,?,?,?)";
		return jdbcTemplate.update(addVendorProduct, product.getProductId(), productId, 
				product.getQuantity(), product.getItemPrice());
	}
	
	
	

}

