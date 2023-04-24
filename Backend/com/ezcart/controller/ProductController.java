package com.ezcart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ezcart.dto.HttpMesgDTO;
import com.ezcart.pojos.Product;
import com.ezcart.service.IProductService;

@Controller
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private IProductService prodService;
	
	@PostMapping("/getProductCategoryList")
	public ResponseEntity<?> getProductCategoryList() {
		System.out.println("IN CONTROLLER: " );
		List<Product> categoryList = prodService.getProductCategory();
		if(categoryList.size() != 0) {
			return new ResponseEntity<List<Product>>(categoryList, HttpStatus.OK);
		}
		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Something went wrong....");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
		
	}
	
	@PostMapping("/getProductSubCategoryList")
	public ResponseEntity<?> getSubProductCategoryList() {
		System.out.println("IN CONTROLLER: " );
		List<Product> categoryList = prodService.getSubProductCategory();
		if(categoryList.size() != 0) {
			return new ResponseEntity<List<Product>>(categoryList, HttpStatus.OK);
		}
		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Something went wrong....");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
		
	}
	
	// Used for admin  
	@PostMapping("/getProductList")
	public ResponseEntity<?> getAllProducts() {
		System.out.println("IN CONTROLLER: " );
		List<Product> categoryList = prodService.getAllProducts();
		if(categoryList.size() != 0) {
			return new ResponseEntity<List<Product>>(categoryList, HttpStatus.OK);
		}
		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Something went wrong....");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
		
	}
	
	@GetMapping("/getSubcategoryByCategory/{categoryId}")
	public ResponseEntity<?> getSubcategoryByCategory(@PathVariable int categoryId) {
		System.out.println("IN CONTROLLER: "  + categoryId);
		List<Product> prodList = prodService.getSubcategoryByCategory(categoryId);
		if(prodList.size() != 0) {
			return new ResponseEntity<List<Product>>(prodList, HttpStatus.OK);
		}
		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Products coming soon under this Category.... :)");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
		
	}
	
	@GetMapping("/getProductBySubcategoryId/{subcategoryId}")
	public ResponseEntity<?> getProductBySubcategoryId(@PathVariable int subcategoryId) {
		System.out.println("IN CONTROLLER: "  + subcategoryId);
		List<Product> prodList = prodService.getProductBySubcategory(subcategoryId);
		if(prodList.size() != 0) {
			return new ResponseEntity<List<Product>>(prodList, HttpStatus.OK);
		}
		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Products coming soon under this segment.... :)");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
		
	}
}
