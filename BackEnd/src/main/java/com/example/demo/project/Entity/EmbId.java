package com.example.demo.project.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmbId implements Serializable {

    @Column(name="id_device")
    private Long id;

    @Column(name="date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
}
