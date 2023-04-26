package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

import com.ezcart.dto.ProductDTO;
import com.ezcart.dto.ProductDetailsDTO;
import com.ezcart.dto.UserDTO;
import com.ezcart.pojos.Product;

public class DetailsWrapper implements RowMapper<ProductDetailsDTO> {

	@Override
	public ProductDetailsDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		ProductDetailsDTO pDetails = new ProductDetailsDTO();
		
		Product p = new Product();
		p.setProductId(rs.getInt("ProductId"));
		p.setProductName(rs.getString("ProductName"));
		p.setProductDesc(rs.getString("ProductDescription"));
		p.setImageUrl(rs.getString("ImageUrl"));
		p.setItempPrice(rs.getFloat("ItemPrice"));
		pDetails.setProductDetails(p);
		
		
		return pDetails ;
	}

}
