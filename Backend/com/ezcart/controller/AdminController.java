
package com.ezcart.controller;

import com.ezcart.service.IVendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import com.ezcart.dto.HttpMesgDTO;
import com.ezcart.dto.ProductDTO;
import com.ezcart.dto.VendorDTO;
import com.ezcart.pojos.User;
import com.ezcart.pojos.Vendor;
import com.ezcart.pojos.Product;
import com.ezcart.service.IUserService;
import com.ezcart.service.IProductService;

@Controller
@RequestMapping("/admin")

public class AdminController {

	@Autowired
	private IProductService productService;

	@Autowired
	private IVendorService vendorService;

	@PostMapping("/addProduct")
	public ResponseEntity<?> addProduct(@RequestBody ProductDTO product) {
		productService.addProduct(product);

		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Product added successfully");
		h.setErrorCode(HttpStatus.OK);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
	}

	@PostMapping("/addVendor")
	public ResponseEntity<?> addVendor(@RequestBody Vendor vendor) {

//        System.out.println("IN CONTROLLER: " + u.toString());
		int uRes = vendorService.addVendor(vendor);
		HttpMesgDTO h = new HttpMesgDTO();
		if (uRes != 0) {
			h.setSuccessMesg("Vendor added successfully!");
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
		h.setErrorMesg("Vendor cannot be added at this time.");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}

	@DeleteMapping("/deleteVendor/{vendorId}")
	public ResponseEntity<?> deleteVendor(@PathVariable int vendorId) {

		// Delete the vendor from the database
//        boolean deleted = false; // assume the vendor is not deleted
		int res = vendorService.deleteVendor(vendorId);
		HttpMesgDTO h = new HttpMesgDTO();
		if (res != 0) {
			h.setSuccessMesg("Vendor deleted successfully!");
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
		h.setErrorMesg("Vendor cannot be deleted at this time.");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}

	@PostMapping("/updateVendorDetails/{vendorId}")
	public ResponseEntity<?> updateVendorDetails(@PathVariable("vendorId") int vendorId, @RequestBody Vendor vendor) {
//        System.out.println("IN CONTROLLER: " + u.toString());
		int uRes = vendorService.updateVendorDetails(vendor, vendorId);
		HttpMesgDTO h = new HttpMesgDTO();
		if (uRes != 0) {
			h.setSuccessMesg("Updated successful!");
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
		h.setErrorMesg("Update unsuccessful!");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/getAllVendors")
	public ResponseEntity<?> getAllVendors() {
//        System.out.println("IN CONTROLLER: " );
		List<Vendor> vendorList = vendorService.getAllVendors();
		if (vendorList.size() != 0) {
			return new ResponseEntity<List<Vendor>>(vendorList, HttpStatus.OK);
		}
		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Something went wrong....");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);
	}

	@DeleteMapping("/deleteProduct/{productId}")
	public ResponseEntity<HttpMesgDTO> deleteProduct(@PathVariable int productId) {

		// Delete the vendor from the database
//        boolean deleted = false; // assume the vendor is not deleted
		int res = productService.deleteProduct(productId);
		HttpMesgDTO h = new HttpMesgDTO();
		if (res != 0) {
			h.setSuccessMesg("Product deleted successfully!");
			h.setSuccessCode(HttpStatus.OK);
			return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
		}
		h.setErrorMesg("Product cannot be deleted at this time.");
		h.setErrorCode(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.BAD_REQUEST);

	}

	@PostMapping("/updateProdDesc/{productId}")
	public ResponseEntity<HttpMesgDTO> updateProdDesc(@PathVariable("productId") int productId,
			@RequestBody ProductDTO product) {

		int productDescUpdate = productService.updateProduct(product);

		HttpMesgDTO h = new HttpMesgDTO();
		h.setErrorMesg("Product description updated successfully");
		h.setErrorCode(HttpStatus.OK);
		return new ResponseEntity<HttpMesgDTO>(h, HttpStatus.OK);
	}

}
