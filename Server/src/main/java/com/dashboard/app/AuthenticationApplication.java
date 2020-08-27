package com.dashboard.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.dashboard.app.repository.userRepository;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses=userRepository.class)
public class AuthenticationApplication{

	public static void main(String[] args) {
		SpringApplication.run(AuthenticationApplication.class, args);
	}

}
