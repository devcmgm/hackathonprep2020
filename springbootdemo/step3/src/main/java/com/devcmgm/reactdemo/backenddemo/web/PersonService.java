
package com.devcmgm.reactdemo.backenddemo.web;

import org.springframework.beans.factory.annotation.Autowired;import org.springframework.stereotype.Service;

import com.devcmgm.reactdemo.backenddemo.db.Person;
import com.devcmgm.reactdemo.backenddemo.db.PersonRepository;

@Service
public class PersonService {

    @Autowired
    private PersonRepository bookRepository;

    public void addPerson(Person person) {
        bookRepository.save(person);
    }
}