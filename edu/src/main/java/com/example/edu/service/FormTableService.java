package com.example.edu.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.edu.model.FormTable;
import com.example.edu.repository.FormTableRepository;

@Service
public class FormTableService {
	
	@Autowired
	FormTableRepository formTableRepository;

	public void add(FormTable formTable) {
		// TODO Auto-generated method stub
		formTableRepository.save(formTable);
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		formTableRepository.deleteById(id);
	}

	public List<FormTable> getAll() {
		// TODO Auto-generated method stub
		return formTableRepository.findAll();
	}

	public void update(int id, FormTable updatedFormTable) {
		// TODO Auto-generated method stub
		Optional<FormTable> existingFormTable = formTableRepository.findById(id);
		if (existingFormTable.isPresent()) {
			FormTable formTable = existingFormTable.get();
			// Update fields
			formTable.setName(updatedFormTable.getName()); // Replace `setFieldName` with actual fields
			formTable.setPrice(updatedFormTable.getPrice()); // Replace `setFieldName` with actual fields
			formTable.setCategory(updatedFormTable.getCategory()); // Replace `setFieldName` with actual fields
			// Repeat for other fields...
			formTableRepository.save(formTable);
		} else {
			throw new RuntimeException("Record not found with id: " + id);
		}

	}

}
