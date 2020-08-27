package com.dashboard.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="epass")
public class Epass {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String district;
	public Epass() {
	}
	public Epass(Integer id, String district) {
		super();
		this.id = id;
		this.district = district;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	@Override
	public String toString() {
		return "Epass [id=" + id + ", district=" + district + "]";
	}
	
	
}
