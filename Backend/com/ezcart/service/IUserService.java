package com.ezcart.service;
import java.util.List;

import com.ezcart.dto.UserDTO;
import com.ezcart.pojos.CustomerCart;
import com.ezcart.pojos.CustomerOrder;
import com.ezcart.pojos.CustomerWishlist;
import com.ezcart.pojos.User;

public interface IUserService {
	
	public UserDTO getUserProfile(String email, String password);
	int updateUserProfile(UserDTO u, int id);
	int addUser(User u);
	int addProductCart(CustomerCart cart);
	int addProductWishlist(CustomerWishlist wishlist);
	public List<CustomerOrder> getOrders(int customerId);
}

