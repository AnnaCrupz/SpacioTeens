package com.spacioteens.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table (name= "contactanos")
public class ContactoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long idContac;
	@Column(nullable = false)
	private String asunto;
	@Column(nullable = false)
	private String mensaje;
	//-----------------Para verificar que si es
	@ManyToOne
	@JoinColumn(nullable=false,name="idUsuario")
	//@JsonProperty(access=Access.WRITE_ONLY)
	private UsuarioModel usuario;

	public ContactoModel() {
		super();
	}

	public ContactoModel(Long idContac, String asunto, String mensaje, UsuarioModel usuario) {
		super();
		this.idContac = idContac;
		this.asunto = asunto;
		this.mensaje = mensaje;
		this.usuario = usuario;
	}

	public Long getIdContac() {
		return idContac;
	}

	public void setIdContac(Long idContac) {
		this.idContac = idContac;
	}

	public String getAsunto() {
		return asunto;
	}

	public void setAsunto(String asunto) {
		this.asunto = asunto;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public UsuarioModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioModel usuario) {
		this.usuario = usuario;
	}


	
	
}
