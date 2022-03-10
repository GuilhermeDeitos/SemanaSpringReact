package com.projetoSpringReact.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoSpringReact.dsmovie.entities.Score;

public interface ScoreRepository extends JpaRepository<Score,Long>{

}
