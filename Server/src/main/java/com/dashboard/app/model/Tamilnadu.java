package com.dashboard.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tamilnadu")
public class Tamilnadu {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String district;
	private Integer confirmed;
	private Integer recovered;
	private Integer death;
	private Integer active;
	public Tamilnadu() {
	}
	public Tamilnadu(Integer id, String district, Integer confirmed, Integer recovered, Integer death, Integer active) {
		super();
		this.id = id;
		this.district = district;
		this.confirmed = confirmed;
		this.recovered = recovered;
		this.death = death;
		this.active = active;
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
	public Integer getConfirmed() {
		return confirmed;
	}
	public void setConfirmed(Integer confirmed) {
		this.confirmed = confirmed;
	}
	public Integer getRecovered() {
		return recovered;
	}
	public void setRecovered(Integer recovered) {
		this.recovered = recovered;
	}
	public Integer getDeath() {
		return death;
	}
	public void setDeath(Integer death) {
		this.death = death;
	}
	public Integer getActive() {
		return active;
	}
	public void setActive(Integer active) {
		this.active = active;
	}
	
	
}
