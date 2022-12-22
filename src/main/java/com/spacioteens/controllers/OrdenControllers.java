package com.spacioteens.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.Optional;

import com.spacioteens.models.OrdenModel;
import com.spacioteens.services.OrdenServices;

@RestController
@RequestMapping("/ordenes")
public class OrdenControllers {
@Autowired
OrdenServices ordenServicios;

@GetMapping()
public ArrayList <OrdenModel> ObtenerOrden(){
	return ordenServicios.ObtenerOrden();
}
@PostMapping()
public OrdenModel guardarContactos(@RequestBody OrdenModel ordenes) {
	return this.ordenServicios.guardarOrden(ordenes);
}
@GetMapping(path="/{id}")
public Optional <OrdenModel>  obtenerUsuarioPorId(@PathVariable("id")Long id){
	return this.ordenServicios.ObtnerPorId(id);
}

@DeleteMapping("/{id}")
public String eliminarPorId(@PathVariable("id") Long id) {
	boolean check=this.ordenServicios.eliminarContacto(id);
	if(check) {
		return "se elimino el usuario"+id;
	}else {
	return "no se elimino el usuario"+id; 
	}
}}
