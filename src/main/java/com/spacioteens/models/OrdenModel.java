package com.spacioteens.models;

import java.sql.Date;
import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table (name= "Orden")
public class OrdenModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true,nullable=false)
	Long id;
	Double precio;
	String cantidad;
	@Column(name="FECHACREACION")
	@JsonFormat(pattern="dd-MM-yyyy")
	private Date fechacreacion;
	
	//@ManyToOne
	//private PerfilModel perfil;
	



@OneToMany(mappedBy="Orden" )
private ArrayList<ProductoModel> producto;


@OneToOne(mappedBy="Orden")
private PagoModel pago;

	public OrdenModel() {
		super();
	}
	public OrdenModel(Long id, Double precio, String cantidad) {
		super();
		this.id = id;
		this.precio = precio;
		this.cantidad = cantidad;
	
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Double getPrecio() {
		return precio;
	}
	public void setPrecio(Double precio) {
		this.precio = precio;
	}
	public String getCantidad() {
		return cantidad;
	}
	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}
	

}
