package com.dashboard.app.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dashboard.app.model.User;
import com.dashboard.app.model.myUserDetails;
import com.dashboard.app.repository.userRepository;

@Service
public class MyUserDetailsService implements UserDetailsService{

	@Autowired
	userRepository repo;
	
	@Override  
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException{
		Optional<User> username=repo.findByUserName(userName); 
		username.orElseThrow(()->new UsernameNotFoundException("Username not found "+username));
		return username.map(myUserDetails::new).get();
	}
}
