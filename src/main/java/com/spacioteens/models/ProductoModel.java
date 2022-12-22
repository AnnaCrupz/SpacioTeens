package com.spacioteens.models;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table (name= "Producto")
public class ProductoModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true,nullable=false)
	Long id;
	String NombreProducto;
	Double Precop;
	String Descripcion;
	String Imagen;
	String Stock;
	@ManyToOne
	private OrdenModel Orden;
	
	
	public ProductoModel() {
		super();
	}
	public ProductoModel(Long id, String nombreProducto, Double precop, String descripcion, String imagen, String stock) {
		super();
		this.id = id;
		NombreProducto = nombreProducto;
		Precop = precop;
		Descripcion = descripcion;
		Imagen = imagen;
		Stock = stock;
	
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombreProducto() {
		return NombreProducto;
	}
	public void setNombreProducto(String nombreProducto) {
		NombreProducto = nombreProducto;
	}
	public Double getPrecop() {
		return Precop;
	}
	public void setPrecop(Double precop) {
		Precop = precop;
	}
	public String getDescripcion() {
		return Descripcion;
	}
	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}
	public String getImagen() {
		return Imagen;
	}
	public void setImagen(String imagen) {
		Imagen = imagen;
	}
	public String getStock() {
		return Stock;
	}
	public void setStock(String stock) {
		Stock = stock;
	}

	
	
}
