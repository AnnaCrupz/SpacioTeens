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

import com.spacioteens.models.PagoModel;
import com.spacioteens.services.PagoServices;

@RestController
@RequestMapping("/pagos")
public class PagoControllers {
	@Autowired
	PagoServices pagosServicios;
	@GetMapping()
	public ArrayList <PagoModel> ObtenerContactos(){
		return pagosServicios.ObtenerContactos();
	};
	@PostMapping()
	public PagoModel guardarContactos(@RequestBody PagoModel pagos) {
		return this.pagosServicios.guardarContactos(pagos);}
	

@GetMapping(path="/{id}")
public Optional <PagoModel> obtenerUsuarioPorId(@PathVariable("id")Long id){
	return this.pagosServicios.ObtenerPorId(id);
}


@DeleteMapping("/{id}")
public String eliminarPorId(@PathVariable("id") Long id) {
	boolean check=this.pagosServicios.eliminarContacto(id);
	if(check) {
		return "se elimino el usuario"+id;
	}else {
	return "no se elimino el usuario"+id; 
	}
}
	
	
}
