package com.dashboard.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dashboard.app.model.User;

public interface userRepository extends JpaRepository<User,Integer>{
	
	Optional<User> findByUserName(String userName);
	
	public User findByEmailId(String emailid);
	
}
