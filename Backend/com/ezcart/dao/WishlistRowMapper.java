package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ezcart.dto.CartWishlistDTO;

public class WishlistRowMapper implements RowMapper<CartWishlistDTO> {

	@Override
	public CartWishlistDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		CartWishlistDTO c = new CartWishlistDTO();
		c.setImageUrl(rs.getString("ImageUrl"));
		c.setProductId(rs.getInt("ProductId"));
		c.setProductName(rs.getString("ProductName"));
		return c;
	}
	
	

}
