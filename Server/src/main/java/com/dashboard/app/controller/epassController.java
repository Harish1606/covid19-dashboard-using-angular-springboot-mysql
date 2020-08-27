package com.dashboard.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.app.model.Epass;
import com.dashboard.app.repository.epassRepository;

@CrossOrigin
@RestController
public class epassController {

	@Autowired
	private epassRepository repo;
	
	@GetMapping("/getEpass")
	public List<Epass> getAllDistricts(){
		return repo.findAll();
	}
	
	@PostMapping("/postEpass")
	public Epass createDistrict(@RequestBody Epass epass) throws Exception{
		Epass obj=repo.findByDistrict(epass.getDistrict());
		if(obj!=null) {
			throw new Exception("District Already exists");
		}
		return repo.save(epass);
	}
	
	@DeleteMapping("/deleteEpass/{id}")
	public Map<String,Boolean> deleteDistrict(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Epass epass=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Not Found"));
		repo.delete(epass);
		Map<String,Boolean> response=new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return response;
	}
}
