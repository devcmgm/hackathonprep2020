package com.devcmgm.reactdemo.backenddemo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devcmgm.reactdemo.backenddemo.db.Person;
import com.devcmgm.reactdemo.backenddemo.db.PersonRepository;

@RestController
public class PersonController {

	@Autowired
	private PersonRepository repository;

	@RequestMapping("/persons")
	public Iterable<Person> getPersons() {
		return repository.findAll();
	}
}
