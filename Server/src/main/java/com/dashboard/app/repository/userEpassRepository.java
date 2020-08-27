package com.dashboard.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dashboard.app.model.UserEpass;

@Repository
public interface userEpassRepository extends JpaRepository<UserEpass,Integer>{
	
	public UserEpass findByEmailIdAndDate(String emailId,String date);
}
