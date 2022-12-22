package com.spacioteens.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spacioteens.models.ProductoModel;
import com.spacioteens.repositories.ProductoRepository;

@Service
public class ProductoServices {
	@Autowired
	ProductoRepository productoRepositorio;
	public ArrayList <ProductoModel> ObtenerContactos(){
		return (ArrayList <ProductoModel>) productoRepositorio.findAll();
}
	public ProductoModel guardarContactos(ProductoModel productos ) {
		return productoRepositorio.save(productos);
		
	}
	public Optional <ProductoModel>ObtenerPorId(Long id){
		return productoRepositorio.findById(id);
	}
	

public boolean eliminarContacto(Long id) {
	try {
		productoRepositorio.deleteById(id);
		return true;
		
	} catch (Exception e) {
		return false;
	}
	 
}
	
}