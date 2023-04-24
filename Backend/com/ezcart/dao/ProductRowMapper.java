package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ezcart.pojos.Product;

public class ProductRowMapper implements RowMapper<Product> {
	
	@Override
	public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
		Product p = new Product();
		p.setProductId(rs.getInt("ProductId"));
		p.setProductName(rs.getString("ProductName"));
		p.setProductDesc(rs.getString("ProductDescription"));
		p.setImageUrl(rs.getString("ImageUrl"));
		return p;
		
	}
	
}
