package com.dashboard.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.app.model.UserEpass;
import com.dashboard.app.repository.userEpassRepository;

@CrossOrigin
@RestController
public class userEpassController {

	@Autowired
	private userEpassRepository repo;
	
	@PostMapping("/userEpass")
	public UserEpass createDistrict(@RequestBody UserEpass epass) throws Exception{
		return repo.save(epass);
	}
	
}
