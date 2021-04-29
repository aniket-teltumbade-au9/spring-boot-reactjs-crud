package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employees {
	@Id
	private int cid;
	private String name;
	private String email;
	private String role;
	private String department;
	private float salary;
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public float getSalary() {
		return salary;
	}
	public void setSalary(float salary) {
		this.salary = salary;
	}
	@Override
	public String toString() {
		return "Employee [cid=" + cid + ", name=" + name + ", email=" + email + ", role=" + role + ", department="
				+ department + ", salary=" + salary + "]";
	}
}
