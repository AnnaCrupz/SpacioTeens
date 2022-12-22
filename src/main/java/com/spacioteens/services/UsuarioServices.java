package com.spacioteens.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spacioteens.models.UsuarioModel;
import com.spacioteens.repositories.UsuarioRepository;

@Service
public class UsuarioServices {
	@Autowired
	UsuarioRepository usuarioRepositorio;
	
	public ArrayList <UsuarioModel> ObtenerContactos(){
		return (ArrayList <UsuarioModel>) usuarioRepositorio.findAll();
}
	
	public UsuarioModel  guardarContactos(UsuarioModel usuarios) {
		return usuarioRepositorio.save(usuarios);
	}
	
	public Optional <UsuarioModel>ObtenerPorId(Long id){
		return usuarioRepositorio.findById(id);
	}
	

public boolean eliminarContacto(Long id) {
	try {
		usuarioRepositorio.deleteById(id);
		return true;
		
	} catch (Exception e) {
		return false;
	}
	 
}
	public UsuarioModel actualizar(UsuarioModel usuariomodel) {
		return usuarioRepositorio.save(usuariomodel);
	}
	
}
