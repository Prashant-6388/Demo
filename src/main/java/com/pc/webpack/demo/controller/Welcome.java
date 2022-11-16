package com.pc.webpack.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Welcome {

    @GetMapping("/welcome")
    public String welcome(Model model, @RequestParam("user") String user) {
        System.out.println("welcome called");
        model.addAttribute("username", user);
        return "welcome";
    }
}
