package com.spacioteens.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.spacioteens.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends CrudRepository <UsuarioModel, Long>{

}
