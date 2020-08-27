package com.dashboard.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.app.model.AuthenticationRequest;
import com.dashboard.app.model.AuthenticationResponse;
import com.dashboard.app.model.User;
import com.dashboard.app.repository.userRepository;
import com.dashboard.app.services.MyUserDetailsService;
import com.dashboard.app.util.JwtUtil;

@CrossOrigin
@RestController
public class userController {
	
	@Autowired 
	private AuthenticationManager authenticationManager;
	
	@Autowired 
	private MyUserDetailsService userDetailsService;
	
	@Autowired 
	private JwtUtil jwtUtilToken;
	
	@Autowired 
	private userRepository repo;
	
	@GetMapping("/hello")
	public String login() {
		return "Hello world";
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		try {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(),authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password");
		}
		final UserDetails userDetails=userDetailsService.loadUserByUsername(authenticationRequest.getUserName());
		final String jwt=jwtUtilToken.generateToken(userDetails);
		
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> createJwtToken(@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmailId();
		if(tempEmailId!=null && !"".equals(tempEmailId)) {
			User userObj=repo.findByEmailId(tempEmailId);
			if(userObj!=null) {
				throw new Exception("User with this "+tempEmailId+" is already exists");
			}
		}
		String tempUsername=user.getUserName();
		if(tempUsername!=null && !"".equals(tempUsername)) {
			Optional<User> username=repo.findByUserName(tempUsername);
			if(username!=null) {
				throw new Exception("User with this "+tempUsername+" is already exists");
			}
		}
		repo.save(user);
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(user.getUserName(),user.getPassword())
				);
			}
			catch (BadCredentialsException e) {
				throw new Exception("Incorrect username or password");
			}
			final UserDetails userDetails=userDetailsService.loadUserByUsername(user.getUserName());
			final String jwt=jwtUtilToken.generateToken(userDetails);
			
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	 	
}
