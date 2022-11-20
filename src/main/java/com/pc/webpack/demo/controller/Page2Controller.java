package com.pc.webpack.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Page2Controller {

    @GetMapping("/page2")
    public String welcome(Model model) {
        System.out.println("page2 called");
        model.addAttribute("pageName", "page 2");
        return "page2";
    }
}
