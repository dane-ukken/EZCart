package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ezcart.pojos.Product;

public class CategoryRowMapper implements RowMapper<Product> {

	@Override
	public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
		Product p = new Product();
		p.setCategoryId(rs.getInt("CategoryId"));
		p.setCategoryName(rs.getString("CategoryName"));
		return p;
	}
	
}
