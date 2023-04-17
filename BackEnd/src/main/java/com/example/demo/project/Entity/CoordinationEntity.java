package com.example.demo.project.Entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.persistence.EmbeddedId;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="arch_1004901")
@Data
@NoArgsConstructor
public class CoordinationEntity {

    @EmbeddedId
    private EmbId id;
    private int speed;
    private int fuel;
    private int temp;
    @Column(name="X")
    private Double xCoordination;
    @Column(name="Y")
    private Double yCoordination;
    @Column(name="Z")
    private Double zCoordination;
    private int ignition;
    private int rpm;
    private int fuel_rate;
    private int tfu;
    private int odo;
    private int SatInView;
    private int signal;
    private int heading;
    private int charger;
    private double latitude;
    private double longitude;
    private int state;
    @Column(name="tram_id")
    private int tramId;
    private int validity ;
    @Column(name="temp_engine")
    private int tempEngine;
    @Column(name="accum_odo")
    private int accumOdo;
    @Nullable
    private Integer do1;
    @Nullable
    private Integer do2;
    @Nullable
    private Integer do3;
    @Nullable
    private Integer do4;
    @Nullable
    private Integer di1;
    @Nullable
    private Integer di2;
    @Nullable
    private Integer di3;
    @Nullable
    private Integer di4;
    @Nullable
    private Integer an1;
    @Nullable
    private Integer an2;
    @Nullable
    private Integer an3;
    @Nullable
    private Integer an4;

}
