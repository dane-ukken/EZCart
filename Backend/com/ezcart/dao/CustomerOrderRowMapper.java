package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.jdbc.core.RowMapper;

import com.ezcart.pojos.CustomerOrder;
import com.ezcart.pojos.Product;

public class CustomerOrderRowMapper implements RowMapper<CustomerOrder> {

	@Override
	public CustomerOrder mapRow(ResultSet rs, int rowNum) throws SQLException {
		CustomerOrder co = new CustomerOrder();
		Product p = new Product();
		
		co.setAddressId(rs.getInt("AddressId"));
		co.setCustomerId(rs.getInt("CustomerId"));
		co.setItemPrice(rs.getFloat("ItemPrice"));
		co.setOrderDate(rs.getDate("OrderDate"));
		co.setOrderId(rs.getInt("OrderId"));
		co.setOrderItemId(rs.getInt("OrderItemId"));
		co.setOrderPrice(rs.getFloat("OrderPrice"));
		p.setProductId(rs.getInt("ProductId"));
		p.setProductName(rs.getString("ProductName"));
		p.setProductDesc(rs.getString("ProductDescription"));
		p.setImageUrl(rs.getString("ImageUrl"));
		co.setProduct(p);
		co.setQuantity(rs.getInt("Quantity"));
		co.setVendorId(rs.getInt("VendorId"));
		return co;
	}
	
	
	
	

}
