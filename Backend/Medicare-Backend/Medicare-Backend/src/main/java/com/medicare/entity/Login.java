package com.medicare.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login {
@Id
private String emailid;
private String name;
private String home_address;
private int contact;
private String Gender;
@Column(name = "typeofuser")
private String typeOfUser;
public String getTypeOfUser() {
	return typeOfUser;
}
public void setTypeOfUser(String typeOfUser) {
	this.typeOfUser = typeOfUser;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getHome_address() {
	return home_address;
}
public void setHome_address(String home_address) {
	this.home_address = home_address;
}
public int getContact() {
	return contact;
}
public void setContact(int contact) {
	this.contact = contact;
}
public String getGender() {
	return Gender;
}
public void setGender(String gender) {
	Gender = gender;
}
private String password;

public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

}
