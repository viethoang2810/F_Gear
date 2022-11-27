/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.controller;

import com.example.demo.entity.UserDTO;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Admin
 */
@RestController
public class HomeController {
        ArrayList<UserDTO> listUser = new ArrayList<>();

    @GetMapping("/list")
    public ArrayList<UserDTO> hello() {
        
        
        return listUser;
    }
    
    @PostMapping("/post")
    public ArrayList<UserDTO> addToList(String username , String password){
        listUser.add(new UserDTO(username, password, "alone"));
        
        return listUser ; 
    }
}
