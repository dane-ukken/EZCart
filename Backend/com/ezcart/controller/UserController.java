package com.ezcart.controller;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private IUserService userService;

	@PostMapping("/getProfile")
	public ResponseEntity<?> getUserProfile(@RequestBody User u) {
		System.out.println("IN CONTROLLER: " + u.getEmail() + " " + u.getAccountPassword());
		UserDTO uRes = userService.getUserProfile(u.getEmail(), u.getAccountPassword());
		
		System.out.println("******** " + uRes);
		if(uRes != null) {
			return new ResponseEntity<UserDTO>(uRes, HttpStatus.OK);
		}
		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Incorrect Email Id or password! Retry...");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);	
	}
	
	@PostMapping("/updateProfile/{id}")
	public ResponseEntity<?> updateUserProfile(@PathVariable int id ,@RequestBody UserDTO u) {
		System.out.println("IN CONTROLLER: " + u.toString());
		int uRes = userService.updateUserProfile(u , id);
		HttpMesgDTO h = new HttpMesgDTO();
		if(uRes !=0) {
			h.setSuccessMesg("Profile updated successfully!");
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
		h.setErrorMesg("Update unsuccessfull !");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> addUser(@RequestBody User u) {
		System.out.println("IN CONTROLLER: " + u.toString());
		int uRes = userService.addUser(u);
		HttpMesgDTO h = new HttpMesgDTO();
		if(uRes !=0) {
			h.setSuccessMesg("Account created successfully!");
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
		h.setErrorMesg("Account cannot be created at this time.");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/addCart")
	public ResponseEntity<?> addCart(@RequestBody CustomerCart cart) {
		System.out.println("IN CONTROLLER: " + cart.toString());
		int uRes = userService.addProductCart(cart);
		HttpMesgDTO h = new HttpMesgDTO();
		if(uRes !=0) {
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
//		h.setErrorMesg("");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/addWishlist")
	public ResponseEntity<?> addWishlist(@RequestBody CustomerWishlist wishlist) {
		System.out.println("IN CONTROLLER: " + wishlist.toString());
		int uRes = userService.addProductWishlist(wishlist);
		HttpMesgDTO h = new HttpMesgDTO();
		if(uRes !=0) {
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
//		h.setErrorMesg("");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/getOrders/{customerId}")
	public ResponseEntity<?> getOrders(@PathVariable int customerId) {
		System.out.println("IN CONTROLLER: " + customerId);
		List<CustomerOrder> res = userService.getOrders(customerId);
		HttpMesgDTO h = new HttpMesgDTO();
		if(res.size()!=0) {
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<List<CustomerOrder>>(res, HttpStatus.OK);
		}
//		h.setErrorMesg("");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}
	
//	@PostMapping("/checkOut")
//	// inserting in customerorder table and updating the payment table
//	// reducing the quantity
//	
	
	
	@GetMapping("/getCart/{customerId}")
	public ResponseEntity<?> getCart(@PathVariable int customerId) {
		System.out.println("IN CONTROLLER: " + customerId);
		List<CartWishlistDTO> res = userService.getCart(customerId);
		HttpMesgDTO h = new HttpMesgDTO();
		if(res.size()!=0) {
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<List<CartWishlistDTO>>(res, HttpStatus.OK);
		}
//		h.setErrorMesg("");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/getWishlist/{customerId}")
	public ResponseEntity<?> getWishlist(@PathVariable int customerId) {
		System.out.println("IN CONTROLLER: " + customerId);
		List<CartWishlistDTO> res = userService.getWishlist(customerId);
		HttpMesgDTO h = new HttpMesgDTO();
		if(res.size()!=0) {
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<List<CartWishlistDTO>>(res, HttpStatus.OK);
		}
//		h.setErrorMesg("");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}
	 
}
