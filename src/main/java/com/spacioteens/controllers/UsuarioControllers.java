package com.spacioteens.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spacioteens.models.UsuarioModel;
import com.spacioteens.services.UsuarioServices;

@RestController
@RequestMapping("/usuarios")
public class UsuarioControllers {
	@Autowired
	UsuarioServices usuarioServicios;
	
	@GetMapping()
	public ArrayList <UsuarioModel> ObtenerContactos(){
		return usuarioServicios.ObtenerContactos();
	};
	
	@PostMapping()
	public UsuarioModel guardarContactos(@RequestBody UsuarioModel usuarios) {
		return this.usuarioServicios.guardarContactos(usuarios);
	}
	

@GetMapping(path="/{id}")
public Optional <UsuarioModel> obtenerUsuarioPorId(@PathVariable("id")Long id){
	return this.usuarioServicios.ObtenerPorId(id);
}

@PutMapping("/actualizar")
public UsuarioModel update(@RequestBody UsuarioModel usuariomodel) {
	return usuarioServicios.actualizar(usuariomodel);
}

@DeleteMapping("/{id}")
public String eliminarPorId(@PathVariable("id") Long id) {
	boolean check=this.usuarioServicios.eliminarContacto(id);
	if(check) {
		return "se elimino el usuario"+id;
	}else {
	return "no se elimino el usuario"+id; 
	}
}
	
}
