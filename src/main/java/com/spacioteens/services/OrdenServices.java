package com.spacioteens.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spacioteens.models.OrdenModel;
import com.spacioteens.repositories.OrdenRepository;

@Service
public class OrdenServices {
	@Autowired
	OrdenRepository ordenRepositorio;
	
	public ArrayList<OrdenModel> ObtenerOrden(){
		return (ArrayList <OrdenModel>) ordenRepositorio.findAll();
	}
	public OrdenModel guardarOrden(OrdenModel ordenes) {
		return ordenRepositorio.save(ordenes);
	}
	
	public Optional<OrdenModel>ObtnerPorId(Long id){
		return ordenRepositorio.findById(id);
	}
	
	public boolean eliminarContacto(Long id) {
		try {
			ordenRepositorio.deleteById(id);
			return true;
			
		} catch (Exception e) {
			return false;
		}
		 
	}
}
