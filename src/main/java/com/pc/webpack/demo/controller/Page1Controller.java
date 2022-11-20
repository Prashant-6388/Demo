package com.pc.webpack.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Page1Controller {

    @GetMapping("/page1")
    public String welcome(Model model) {
        System.out.println("page1 called");
        model.addAttribute("pageName", "page 1");
        return "page1";
    }
}
