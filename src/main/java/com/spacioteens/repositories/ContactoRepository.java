package com.spacioteens.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spacioteens.models.ContactoModel;

@Repository
public interface ContactoRepository extends CrudRepository  <ContactoModel, Long>{

}
