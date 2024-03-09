package com.ash.LoginSignUp.dao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.LoginPageRepository;
import com.ash.LoginSignUp.dto.LoginPage;

@Repository
public class LoginPageDao {

	@Autowired
	private LoginPageRepository repo;
	
	public LoginPage saveDetails(LoginPage l) {
		LoginPage loginPage= repo.save(l);
		if(loginPage!=null) {
			return loginPage;
		}else 
			return null;
	}
	public LoginPage get(String email,String password){
		return repo.findByEmailAndPassword(email, password);
	}
}
