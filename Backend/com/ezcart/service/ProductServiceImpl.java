package com.ezcart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ezcart.dao.IProductDao;
import com.ezcart.pojos.Product;

@Service
@Transactional
public class ProductServiceImpl implements IProductService {

	@Autowired
	private IProductDao prodDao;
	
	
	@Override
	public List<Product> getProductCategory() {
		return prodDao.getProductCategory();
	}


	@Override
	public List<Product> getSubProductCategory() {
		return prodDao.getProductSubCategory();
	}


	@Override
	public List<Product> getAllProducts() {
		return prodDao.getAllProducts();
	}


	@Override
	public List<Product> getProductBySubcategory(int subcategoryId) {
		return prodDao.getProductBySubcategory(subcategoryId);
	}


	@Override
	public List<Product> getSubcategoryByCategory(int categoryId) {
		return prodDao.getSubcategoryByCategory(categoryId);
	}

}
