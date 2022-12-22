package com.spacioteens.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spacioteens.models.PagoModel;

@Repository
public interface PagoRepository extends CrudRepository  <PagoModel, Long>{

}
