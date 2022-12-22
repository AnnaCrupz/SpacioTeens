package com.spacioteens.models;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table (name= "Pago")
public class PagoModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true,nullable=false)
	Long id;
	String referencia;
	@Column(name="FECHACOMPRA")
	@JsonFormat(pattern="dd-MM-yyyy")
	private Date fechacompra;
	Double Monto_total;
	String tarjeta;
	String NombreTitular;
	int mes;
	int anio;
	int cvv;
	
	
	@OneToOne
	@JoinColumn(name="id")
	private OrdenModel Orden;
	
	public PagoModel() {
		super();
	}
	public PagoModel(Long id, String referencia, Double monto_total, String tarjeta, String nombreTitular, int mes,
			int anio, int cvv) {
		super();
		this.id = id;
		this.referencia = referencia;
		Monto_total = monto_total;
		this.tarjeta = tarjeta;
		NombreTitular = nombreTitular;
		this.mes = mes;
		this.anio = anio;
		this.cvv = cvv;
	
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getReferencia() {
		return referencia;
	}
	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}
	public Double getMonto_total() {
		return Monto_total;
	}
	public void setMonto_total(Double monto_total) {
		Monto_total = monto_total;
	}
	public String getTarjeta() {
		return tarjeta;
	}
	public void setTarjeta(String tarjeta) {
		this.tarjeta = tarjeta;
	}
	public String getNombreTitular() {
		return NombreTitular;
	}
	public void setNombreTitular(String nombreTitular) {
		NombreTitular = nombreTitular;
	}
	public int getMes() {
		return mes;
	}
	public void setMes(int mes) {
		this.mes = mes;
	}
	public int getAnio() {
		return anio;
	}
	public void setAnio(int anio) {
		this.anio = anio;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	
	
}
