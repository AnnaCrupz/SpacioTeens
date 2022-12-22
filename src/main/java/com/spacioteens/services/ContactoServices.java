package com.spacioteens.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spacioteens.models.ContactoModel;
import com.spacioteens.repositories.ContactoRepository;

@Service
public class ContactoServices  {
@Autowired
ContactoRepository contactoRepositorio;

public ArrayList <ContactoModel> ObtenerContactos(){
	return (ArrayList <ContactoModel>) contactoRepositorio.findAll();
};

public ContactoModel guardarContactos(ContactoModel contactanos) {
	return contactoRepositorio.save(contactanos);
};

public Optional <ContactoModel>ObtenerPorId(Long id){
	return contactoRepositorio.findById(id);
}

public boolean eliminarContacto(Long id) {
	try {
		contactoRepositorio.deleteById(id);
		return true;
		
	} catch (Exception e) {
		return false;
	}
	 
}


}
