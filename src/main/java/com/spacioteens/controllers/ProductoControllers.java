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

import com.spacioteens.models.ProductoModel;
import com.spacioteens.services.ProductoServices;

@RestController
@RequestMapping("/productos")
public class ProductoControllers {
	@Autowired
	ProductoServices productoServicios;
	
	@GetMapping()
	public ArrayList <ProductoModel> ObtenerContactos(){
		return productoServicios.ObtenerContactos();
	};

	@PostMapping()
	public ProductoModel guardarContactos(@RequestBody ProductoModel productos) {
		return this.productoServicios.guardarContactos(productos);
	}

@GetMapping(path="/{id}")
public Optional <ProductoModel> obtenerUsuarioPorId(@PathVariable("id")Long id){
	return this.productoServicios.ObtenerPorId(id);
}

@DeleteMapping("/{id}")
public String eliminarPorId(@PathVariable("id") Long id) {
	boolean check=this.productoServicios.eliminarContacto(id);
	if(check) {
		return "se elimino el usuario"+id;
	}else {
	return "no se elimino el usuario"+id; 
	}
}
	
}
