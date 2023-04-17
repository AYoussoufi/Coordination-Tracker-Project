package com.example.demo.project.Controller;

import com.example.demo.project.Service.CoordinationService;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CoordinationController {

    @Autowired
    private CoordinationService coordinationService;
    private ObjectMapper objectMapper;

    @RequestMapping("/api/v1/coordination")
    public void getCoordination(HttpServletResponse httpServletResponse) throws IOException {
        this.objectMapper = new ObjectMapper();
        httpServletResponse.setContentType("application/json");
        this.objectMapper.writeValue(httpServletResponse.getWriter(),this.coordinationService.getCoordinations());
    }
}
