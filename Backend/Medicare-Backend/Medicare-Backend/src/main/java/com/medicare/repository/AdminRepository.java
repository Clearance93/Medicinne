package com.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String>{
	
}
