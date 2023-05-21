package com.example.vodservicejava.Repository;

import com.example.vodservicejava.Domain.Video;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<Video, Long> {
}
