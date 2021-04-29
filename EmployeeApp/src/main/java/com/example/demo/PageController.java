package com.example.demo;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
@Controller
public class PageController {
	@Autowired
	EmployeeRepo repo;
	@ResponseBody
  @CrossOrigin("http://localhost:3000")
	@PostMapping("/employee/add")
	public ResponseEntity<Employees> addEmployee(Employees emp) {
		return new ResponseEntity<Employees>(repo.save(emp),HttpStatus.OK);
	}
	@ResponseBody
  @CrossOrigin("http://localhost:3000")
	@GetMapping("/employee/all")
	public ResponseEntity<Iterable<Employees>> allEmployees(){
		Iterable<Employees> empList=repo.findAll();
		return new ResponseEntity<Iterable<Employees>>(empList,HttpStatus.OK);
	}
	@ResponseBody
  @CrossOrigin("http://localhost:3000")
	@GetMapping("/employee/details/{id}")
	public Optional<Employees> singleEmployeeDetails(@PathVariable("id") int id){
		Optional<Employees> emp=repo.findById(id);
		return emp;
	}
	@ResponseBody
  @CrossOrigin("http://localhost:3000")
	@DeleteMapping("/employee/delete/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable("id") int id) {
		if(repo.findById(id).isPresent())
		{
		repo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	@ResponseBody
  @CrossOrigin("http://localhost:3000")
	@PutMapping("/employee/update/{id}")
    public ResponseEntity<?> updateEmployee(@RequestPayload Employees employee, @PathVariable Integer id) {
        try {
            Employees existEmp = repo.findById(id).get();
            existEmp.setCid(id);
            existEmp.setName(employee.getName());
            existEmp.setDepartment(employee.getDepartment());
            existEmp.setEmail(employee.getEmail());
            existEmp.setRole(employee.getRole());
            repo.save(existEmp);
            return new ResponseEntity<>(existEmp,HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
