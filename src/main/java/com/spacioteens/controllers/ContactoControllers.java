package com.spacioteens.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spacioteens.models.ContactoModel;
import com.spacioteens.services.ContactoServices;

@RestController
@RequestMapping("/contacto")
public class ContactoControllers {
	@Autowired
	ContactoServices ContactoServicios;
	
	@GetMapping()
	public ArrayList <ContactoModel> ObtenerContactos(){
		return ContactoServicios.ObtenerContactos();
	};
	@PostMapping()
	public ContactoModel guardarContactos(@RequestBody ContactoModel contactanos) {
		return this.ContactoServicios.guardarContactos(contactanos);
	};
	
	

@GetMapping(path="/{id}")
public Optional <ContactoModel> obtenerUsuarioPorId(@PathVariable("id")Long id){
	return this.ContactoServicios.ObtenerPorId(id);
}
@DeleteMapping("/{id}")
public String eliminarPorId(@PathVariable("id") Long id) {
	boolean check=this.ContactoServicios.eliminarContacto(id);
	if(check) {
		return "se elimino el usuario"+id;
	}else {
	return "no se elimino el usuario"+id; 
	}
}
	
	

}
