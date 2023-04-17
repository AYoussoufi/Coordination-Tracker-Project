package com.example.demo.project.Service;

import com.example.demo.project.Entity.CoordinationEntity;
import com.example.demo.project.Repository.CoordinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class CoordinationService {


    private CoordinationRepository coordinationRepository;

    @Autowired
    public CoordinationService(CoordinationRepository coordinationRepository) {
        this.coordinationRepository = coordinationRepository;
    }

    public List<Object[]> getCoordinations(){
        return this.coordinationRepository.findLatitudeAndLongitude();
    }
}
