package com.dashboard.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.app.model.Tamilnadu;
import com.dashboard.app.repository.tamilnaduRepository;

@CrossOrigin
@RestController
public class tamilnaduController {

	@Autowired
	private tamilnaduRepository repo;
	
	@GetMapping("/get")
	public List<Tamilnadu> getAllDistricts(){
		return repo.findAll();
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Tamilnadu> getDistrict(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Tamilnadu tamilnadu=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("District not found"));
		return ResponseEntity.ok().body(tamilnadu);
	}
	
	@PostMapping("/post")
	public Tamilnadu createDistrict(@RequestBody Tamilnadu tamilnadu) throws Exception{
		Tamilnadu obj=repo.findByDistrict(tamilnadu.getDistrict());
		if(obj!=null) {
			throw new Exception("District Already exists");
		}
		return repo.save(tamilnadu);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Tamilnadu> updateDistrict(@PathVariable(value="id") Integer Id,@RequestBody Tamilnadu district) throws ResourceNotFoundException{
		Tamilnadu tamilnadu=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("District not found"));
		tamilnadu.setConfirmed(district.getConfirmed());
		tamilnadu.setActive(district.getActive());
		tamilnadu.setDeath(district.getDeath());
		tamilnadu.setRecovered(district.getRecovered());
		final Tamilnadu updatedDistrict=repo.save(tamilnadu);
		return ResponseEntity.ok(updatedDistrict);
	}
	
	@DeleteMapping("/delete/{id}")
	public Map<String,Boolean> deleteDistrict(@PathVariable(value="id") Integer Id) throws ResourceNotFoundException{
		Tamilnadu tamilnadu=repo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Not Found"));
		repo.delete(tamilnadu);
		Map<String,Boolean> response=new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return response;
	}
}
