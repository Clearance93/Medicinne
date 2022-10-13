package com.medicare.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Admin;
import com.medicare.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	AdminRepository ar;
	
	public String adminSignIn(Admin admin) {
		Optional<Admin> results = ar.findById(admin.getEmail());
		
		if(results.isPresent()) {
			Admin ad = results.get();
			
			if(ad.getPassword().equals(admin.getPassword())) {
				return "Logged in successfuuly";
			}
			else {
				return "Invalid password or email";
			}
		}
		return "Welcome admin";
	}
	
	public String adminSignUp(Admin admin) {
		Optional<Admin> results = ar.findById(admin.getEmail());
			
			if(results.isPresent()) {
				return "Email already exist";
			} 
		ar.save(admin);
		return "Account created successfully";
	}
}
