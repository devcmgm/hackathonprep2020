package com.devcmgm.reactdemo.backenddemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.devcmgm.reactdemo.backenddemo.db.Person;
import com.devcmgm.reactdemo.backenddemo.db.PersonRepository;

@SpringBootApplication
public class BackenddemoApplication {

	@Autowired	
	private PersonRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(BackenddemoApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
			Person p1 = new Person("Zach" , "Lewis", "zacemail", "zacphone");
			Person p2 = new Person("You" , "Last", "Youmail", "youphone");
			Person p3 = new Person("Them" , "more", "Thememail", "themphone");
			
			repository.save(p1);
			repository.save(p2);
			repository.save(p3);
		};
	}	
}
