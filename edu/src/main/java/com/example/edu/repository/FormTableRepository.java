package com.example.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.edu.model.FormTable;

@Repository
public interface FormTableRepository extends JpaRepository<FormTable,Integer>{

}
