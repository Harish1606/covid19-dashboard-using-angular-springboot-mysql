package com.dashboard.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dashboard.app.model.Tamilnadu;

@Repository
public interface tamilnaduRepository extends JpaRepository<Tamilnadu,Integer>{

	public Tamilnadu findByDistrict(String district);
}
