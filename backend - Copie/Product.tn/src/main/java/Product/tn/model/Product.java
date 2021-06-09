package Product.tn.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id_p;
	private String nom;
	private int PrixUnitaire;
	private int Qte;
	public int getId_p() {
		return id_p;
	}
	public void setId_p(int id_p) {
		this.id_p = id_p;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public int getPrixUnitaire() {
		return PrixUnitaire;
	}
	public void setPrix_Unitaire(int prix_Unitaire) {
		PrixUnitaire = prix_Unitaire;
	}
	public int getQte() {
		return Qte;
	}
	public void setQte(int qte) {
		Qte = qte;
	}
	public Product(int id_p, String nom, int prix_Unitaire, int qte) {
		this.id_p = id_p;
		this.nom = nom;
		PrixUnitaire = prix_Unitaire;
		Qte = qte;
	}
	public Product() {
		
	}
	@Override
	public String toString() {
		return "Product [id_p=" + id_p + ", nom=" + nom + ", Prix_Unitaire=" + PrixUnitaire + ", Qte=" + Qte + "]";
	}
	}
