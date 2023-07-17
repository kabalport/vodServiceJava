package com.example.vodservicejava.Controller;

import com.example.vodservicejava.Domain.Video;
import com.example.vodservicejava.Service.VideoService;
import org.springframework.http.ResponseEntity;
import java.net.MalformedURLException;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;

@RestController
public class VideoController {
    private final VideoService videoService;
    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    //Create
    @PostMapping("video")
    public Video uploadVideo(@RequestParam("file") MultipartFile file) throws IOException {
        return videoService.uploadVideo(file);
    }

    //Read
    @GetMapping("/video/{id}")
    public ResponseEntity<Resource> getVideo(@PathVariable Long id) throws MalformedURLException {
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, "video/mp4")
                .body(videoService.getVideo(id));
    }

    //Update
    @PutMapping("video/{id}")
    public Video updateVideo(@PathVariable Long id, @RequestParam("file") MultipartFile file) throws IOException {
        return videoService.updateVideo(id, file);
    }

    //Delete
    @DeleteMapping("video/{id}")
    public ResponseEntity<?> deleteVideo(@PathVariable Long id) {
        videoService.deleteVideo(id);
        return ResponseEntity.ok().build();
    }

    //Get All Videos
    @GetMapping("/videos")
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }
}
