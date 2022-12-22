package com.spacioteens.models;


import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table (name= "usuario")
public class UsuarioModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true,nullable=false)
private Long idUsuario;
	@Column(nullable=false)
private String nombre;
	@Column(nullable=false)
private String apellido;
	@Column(nullable=false)
private String nombreUsuario;
	@Column(nullable=false)
private String email;
	@Column(nullable=false)
private String contrasenia;
	@Column(nullable=true)
private String domicilio;
	@Column(nullable=true)
private String cP;
	@Column(nullable=true)
private String telefono;

	@OneToMany
	private List<ContactoModel> contacto;

public UsuarioModel() {

}


public UsuarioModel(Long idUsuario, String nombre, String apellido, String nombreUsuario, String email, String contrasenia,
		String domicilio, String cP, String telefono) {
	this.idUsuario = idUsuario;
	this.nombre = nombre;
	this.apellido = apellido;
	this.nombreUsuario = nombreUsuario;
	this.email = email;
	this.contrasenia = contrasenia;
	this.domicilio = domicilio;
	this.cP = cP;
	this.telefono = telefono;
}


public Long getIdUsuario() {
	return idUsuario;
}


public void setIdUsuario(Long idUsuario) {
	this.idUsuario = idUsuario;
}


public String getNombre() {
	return nombre;
}


public void setNombre(String nombre) {
	this.nombre = nombre;
}


public String getApellido() {
	return apellido;
}


public void setApellido(String apellido) {
	this.apellido = apellido;
}


public String getNombreUsuario() {
	return nombreUsuario;
}


public void setNombreUsuario(String nombreUsuario) {
	this.nombreUsuario = nombreUsuario;
}


public String getEmail() {
	return email;
}


public void setEmail(String email) {
	this.email = email;
}


public String getContrasenia() {
	return contrasenia;
}


public void setContrasenia(String contrasenia) {
	this.contrasenia = contrasenia;
}


public String getDomicilio() {
	return domicilio;
}


public void setDomicilio(String domicilio) {
	this.domicilio = domicilio;
}


public String getcP() {
	return cP;
}


public void setcP(String cP) {
	this.cP = cP;
}


public String getTelefono() {
	return telefono;
}


public void setTelefono(String telefono) {
	this.telefono = telefono;
}




}

