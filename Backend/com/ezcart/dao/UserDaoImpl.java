package com.ezcart.dao;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.ezcart.dto.UserDTO;
import com.ezcart.pojos.CustomerCart;
import com.ezcart.pojos.CustomerOrder;
import com.ezcart.pojos.CustomerWishlist;
import com.ezcart.pojos.User;

@Repository
public class UserDaoImpl implements IUserDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public UserDTO getUserProfile(String email, String password) {
		String getQuery = "select * from User where email = ? and accountpassword = ?";
		List<UserDTO> list = jdbcTemplate.query(getQuery, new UserRowMapper(), email, password);
		UserDTO u = new UserDTO();
		if (list.size() == 0) {
			return null;
		}
		return list.get(0);

	}

	@Override
	public int updateUserProfile(UserDTO u, int id) {
		String updateQuery = "update User set email = ?, phone = ? where userId = ?";
		return jdbcTemplate.update(updateQuery, u.getEmail(), u.getPhone(), id);

	}

	@Override
	public int addUser(User u) {
		String insertQuery = "insert into User(email, phone, fname,lname,createDate,accountpassword ) values(?,?,?,?,?,?)";
		LocalDateTime d = LocalDateTime.now();
		return jdbcTemplate.update(insertQuery, u.getEmail(), u.getPhone(), u.getfName(), u.getlName(),
				Timestamp.valueOf(d), u.getAccountPassword());
	}

	@Override
	public int addProductToCart(CustomerCart cart) {
		String addProduct = "insert into Cart(CustomerId, ProductId, Quantity ) values(?,?,?)";
		return jdbcTemplate.update(addProduct, cart.getCustomerId(), cart.getProductId(), cart.getProductQty());
	}

	@Override
	public int addProductToWishlist(CustomerWishlist wishlist) {
		String addProduct = "insert into Wishlist(CustomerId, ProductId) values(?,?)";
		return jdbcTemplate.update(addProduct, wishlist.getCustomerId(), wishlist.getProductId());
	}

	@Override
	public List<CustomerOrder> getOrders(int customerId) {
		String getOrder = "select oi.*, co.orderprice, co.orderdate, co.customerid, co.addressid , p.* from "
				+ "orderitem oi natural join customerorder co natural join product p where "
				+ "oi.orderId = (select orderId from customerorder where customerId = ?)" ;
		return jdbcTemplate.query(getOrder , new CustomerOrderRowMapper(), customerId);
	}

}
