package com.spacioteens.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spacioteens.models.ProductoModel;

@Repository
public interface ProductoRepository extends CrudRepository <ProductoModel, Long>{

}
