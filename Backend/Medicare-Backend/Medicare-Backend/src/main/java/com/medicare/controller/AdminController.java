package com.medicare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.entity.Admin;
import com.medicare.service.AdminService;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {
	@Autowired
	AdminService as;
	
	@PostMapping(value ="adminSignIn", consumes =MediaType.APPLICATION_JSON_VALUE)
	public String adminSignIn(@RequestBody Admin admin) {
//		System.out.println();
		return as.adminSignIn(admin);
	}
	
	@PostMapping(value ="adminSignUp", consumes =MediaType.APPLICATION_JSON_VALUE)
	public String adminSignUp(@RequestBody Admin admin) {
		return as.adminSignUp(admin);
	}
}
