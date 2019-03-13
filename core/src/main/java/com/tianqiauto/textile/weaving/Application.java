package com.tianqiauto.textile.weaving;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@RestController
@EnableJpaAuditing
@EnableSwagger2
@EnableJpaRepositories(basePackages = {"com.tianqiauto"})
@EntityScan(basePackages = {"com.tianqiauto"})
@ComponentScan(basePackages = {"com.tianqiauto"})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class,args);
    }

    @GetMapping("hello")
    public String hello(){
        return "你好，上海纺织";
    }

}
