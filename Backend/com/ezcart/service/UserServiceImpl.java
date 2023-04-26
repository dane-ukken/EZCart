package com.ezcart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ezcart.dao.IUserDao;
import com.ezcart.dto.UserDTO;
import com.ezcart.pojos.CustomerCart;
import com.ezcart.pojos.CustomerOrder;
import com.ezcart.pojos.CustomerWishlist;
import com.ezcart.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private IUserDao userDao;

	@Override
	public UserDTO getUserProfile(String email, String password) {
		return userDao.getUserProfile(email, password);
	}

	@Override
	public int updateUserProfile(UserDTO u, int id) {
		return userDao.updateUserProfile(u, id);
	}

	@Override
	public int addUser(User u) {
		return userDao.addUser(u);
	}
	
	@Override
	public int addProductCart(CustomerCart cart) {
		return userDao.addProductToCart(cart);
	}

	@Override
	public int addProductWishlist(CustomerWishlist wishlist) {
		return userDao.addProductToWishlist(wishlist);
	}

	@Override
	public List<CustomerOrder> getOrders(int customerId) {
		return userDao.getOrders(customerId);
	}
	
	@Override
	public List<CartWishlistDTO> getCart(int customerId) {
		return userDao.getCart(customerId);
	}
	
	@Override
	public List<CartWishlistDTO> getWishlist(int customerId) {
		return userDao.getWishlist(customerId);
	}
}
