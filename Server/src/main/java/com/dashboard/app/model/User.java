package com.dashboard.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {

	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String emailId;
	private String userName;
	private String password;
	private String roles; 
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
	public User() {
	}
	public User(int id, String emailId, String userName, String password,String roles) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.userName = userName;
		this.password = password;
		this.roles=roles;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
}
