package com.dashboard.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.dashboard.app.filter.JwtRequestFilter;
import com.dashboard.app.services.MyUserDetailsService;

@Configuration
@SuppressWarnings("deprecation")
@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter{

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Autowired 
	private MyUserDetailsService myUserDetailsService;
	
	@Autowired 
	private JwtRequestFilter jwtRequestFilter; 
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(myUserDetailsService);
	}
	
	@Override 
	protected void configure(HttpSecurity http) throws Exception{
		http.csrf().disable().authorizeRequests().antMatchers("/authenticate").permitAll().and().authorizeRequests().antMatchers("/register").permitAll().and().authorizeRequests().antMatchers("/get").permitAll().and().authorizeRequests().antMatchers("/post").permitAll().and().authorizeRequests().antMatchers("/update/{id}").permitAll().and().authorizeRequests().antMatchers("/get/{id}").permitAll().and().authorizeRequests().antMatchers("/getEpass").permitAll().and().authorizeRequests().antMatchers("/postEpass").permitAll().and().authorizeRequests().antMatchers("/deleteEpass/{id}").permitAll().and().authorizeRequests().antMatchers("/userEpass").permitAll().and().authorizeRequests().antMatchers("/delete/{id}").permitAll().anyRequest().authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().cors();
		http.addFilterBefore(jwtRequestFilter,UsernamePasswordAuthenticationFilter.class);
	}
	
	@Bean 
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}
}
