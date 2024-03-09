package com.ash.LoginSignUp.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.LoginPageDao;
import com.ash.LoginSignUp.dto.LoginPage;

@RestController
@CrossOrigin
public class LoginPageController {

	@Autowired
	private LoginPageDao dao;
	
	@PostMapping("save")
	public LoginPage saveDetails(@RequestBody LoginPage l) {
		return dao.saveDetails(l);
	}
	@GetMapping("get/{email}/{password}")
	public LoginPage get(@PathVariable String email,@PathVariable String password) {
		return dao.get(email, password);
	}

}
