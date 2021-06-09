package Product.tn.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import Product.tn.model.Product;


public interface ProductRepository extends JpaRepository<Product,Integer>  {

	Object save = null;

} 


