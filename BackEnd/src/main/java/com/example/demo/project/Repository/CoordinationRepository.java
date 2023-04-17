package com.example.demo.project.Repository;

import com.example.demo.project.Entity.CoordinationEntity;
import com.example.demo.project.Entity.EmbId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoordinationRepository extends JpaRepository<CoordinationEntity,EmbId> {

    @Query("SELECT c.latitude, c.longitude FROM CoordinationEntity c")
    public List<Object[]> findLatitudeAndLongitude();

}
