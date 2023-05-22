package com.example.vodservicejava.Service;

import com.example.vodservicejava.Domain.Video;
import com.example.vodservicejava.Repository.VideoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.Resource;

import java.nio.file.Paths;
import java.io.IOException;
import java.io.File;
import java.net.MalformedURLException;

@Service
public class VideoService {

    private final VideoRepository videoRepository;
    private final String uploadDir = "C:/upload/";

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public Video uploadFile(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        File dest = new File(uploadDir + fileName);
        file.transferTo(dest);

        Video video = new Video();
        video.setFileName(fileName);
        video.setFilePath(dest.getAbsolutePath());
        return videoRepository.save(video);
    }

    public Resource getVideo(Long id) throws MalformedURLException {
        Video video = videoRepository.findById(id).orElseThrow();
        return new UrlResource(Paths.get(video.getFilePath()).toUri());
    }
}

