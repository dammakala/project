package Product.tn.controlleur;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Product.tn.dao.ProductRepository;
import Product.tn.model.Product;


@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping(value="/v1")

public class ProductController {
	@Autowired
	public ProductRepository PrdRep;
	// api add Produit
		@PostMapping(value="/add/Product")
		public Product createProduit(@RequestBody Product Prd) {
			return PrdRep.save(Prd);
		}
		
		
	// api get all Produit
		@RequestMapping(value="/Produit")
		public List<Product> getProduct() {
			return   PrdRep.findAll();
		}
		
		
	// api update Produit
		@GetMapping(value="/produit/{id_p}")
		public Optional<Product> getprdId(@PathVariable(value="id_p") int id_p){
			return  PrdRep.findById(id_p);
}
		// api Delete Produit

		@DeleteMapping ( "/Produit/dlt/{id_p}" )  
		public Object  deleteprd( @PathVariable int  id_p)    
		{
			PrdRep.deleteById(id_p);
		
		return ProductRepository.save;
		}
		//get  produit by id
				@GetMapping(value="/pd/{id_p}")
				public Optional<Product> getPdId(@PathVariable(value="id_p") int id_p)
				{
					return  PrdRep.findById(id_p);
					
				}
			
}
