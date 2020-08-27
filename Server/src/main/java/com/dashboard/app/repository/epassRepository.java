package com.dashboard.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dashboard.app.model.Epass;

@Repository
public interface epassRepository extends JpaRepository<Epass,Integer>{

	public Epass findByDistrict(String district);
}
