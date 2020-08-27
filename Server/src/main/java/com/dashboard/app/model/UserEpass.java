package com.dashboard.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userepass")
public class UserEpass {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String emailId;
	private String userName;
	private String date;
	
	public UserEpass() {
	}
	public UserEpass(Integer id, String emailId, String userName, String date) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.userName = userName;
		this.date = date;
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "UserEpass [id=" + id + ", emailId=" + emailId + ", userName=" + userName + ", date=" + date + "]";
	}
	
	
}
