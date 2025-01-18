package com.example.edu.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.edu.model.FormTable;
import com.example.edu.service.FormTableService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class FormTableController {
	
	@Autowired
	FormTableService formTableService;
	
	@PostMapping("/add")
	public void add(@RequestBody FormTable formTable) {
		formTableService.add(formTable);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		formTableService.delete(id);
	}
	
	@GetMapping("/all")
	public List<FormTable> getAll() {
		return formTableService.getAll();
	}
	
	@PutMapping("/update/{id}")
	public void update(@PathVariable int id, @RequestBody FormTable updatedFormTable) {
		formTableService.update(id, updatedFormTable);
	}

}
