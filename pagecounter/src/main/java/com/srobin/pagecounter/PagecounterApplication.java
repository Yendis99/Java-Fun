package com.srobin.pagecounter;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class PagecounterApplication {
	public static void main(String[] args) {
		SpringApplication.run(PagecounterApplication.class, args);
	}
	
		
}
