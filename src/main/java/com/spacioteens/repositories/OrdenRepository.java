package com.spacioteens.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spacioteens.models.OrdenModel;

@Repository
public interface OrdenRepository extends CrudRepository  <OrdenModel, Long>{

}
