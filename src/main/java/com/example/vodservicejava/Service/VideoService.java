package com.example.vodservicejava.Service;

import com.example.vodservicejava.Domain.Video;
import com.example.vodservicejava.Repository.VideoRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
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
//    private final String uploadDir = "C:/upload/";
//    private final String uploadDir = "/Users/choedaeyeol/upload/";
    @Value("${upload.dir}")
    private String uploadDir;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }
    @Transactional
    public Video uploadVideo(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        File dest = new File(uploadDir + fileName);
        file.transferTo(dest);

        Video video = new Video();
        video.setFileName(fileName);
        video.setFilePath(dest.getAbsolutePath());
        return videoRepository.save(video);
    }
    @Transactional(readOnly = true)
    public Resource getVideo(Long id) throws MalformedURLException {
        Video video = videoRepository.findById(id).orElseThrow();
        return new UrlResource(Paths.get(video.getFilePath()).toUri());
    }

    @Transactional
    public Video updateVideo(Long id, MultipartFile file) throws IOException {
        Video video = videoRepository.findById(id)
                .orElseThrow();

        // Delete the old file
        File oldFile = new File(video.getFilePath());
        if(oldFile.exists()){
            oldFile.delete();
        }

        String fileName = file.getOriginalFilename();
        File dest = new File(uploadDir + fileName);
        file.transferTo(dest);

        video.setFileName(fileName);
        video.setFilePath(dest.getAbsolutePath());
        return videoRepository.save(video);
    }

    @Transactional
    public void deleteVideo(Long id) {
        Video video = videoRepository.findById(id)
                .orElseThrow();
        // 실제 파일도 삭제해야 합니다.
        File file = new File(video.getFilePath());
        if(file.exists()){
            if(!file.delete()){
                throw new RuntimeException("Failed to delete the file");
            }
        }
        videoRepository.delete(video);
    }
    @Transactional(readOnly = true)
    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }


}

