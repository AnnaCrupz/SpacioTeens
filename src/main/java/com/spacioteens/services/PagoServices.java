package com.spacioteens.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spacioteens.models.PagoModel;
import com.spacioteens.repositories.PagoRepository;

@Service
public class PagoServices {
	@Autowired
	PagoRepository pagoRepositorio;
	public ArrayList <PagoModel> ObtenerContactos(){
		return (ArrayList <PagoModel>)pagoRepositorio.findAll();
	}
	public PagoModel guardarContactos(PagoModel pagos) {
		return pagoRepositorio.save(pagos);
	}
	public Optional <PagoModel>ObtenerPorId(Long id){
		return pagoRepositorio.findById(id);
	}
	
	public boolean eliminarContacto(Long id) {
		try {
			pagoRepositorio.deleteById(id);
			return true;
			
		} catch (Exception e) {
			return false;
		}
		 
	}
	
	
}
	
