package com.example.vodservicejava.Repository;

import com.example.vodservicejava.Domain.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
}
