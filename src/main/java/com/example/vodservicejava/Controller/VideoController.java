package com.example.vodservicejava.Controller;


import com.example.vodservicejava.Domain.Video;
import com.example.vodservicejava.Service.FileStorageService;
import com.example.vodservicejava.Service.VideoService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;


@RestController
@RequestMapping("/api/videos")
public class VideoController {

    private final VideoService videoService;
    private final FileStorageService fileStorageService;

    public VideoController(VideoService videoService, FileStorageService fileStorageService) {
        this.videoService = videoService;
        this.fileStorageService = fileStorageService;
    }


    @PostMapping
    public Video createVideo(@RequestBody Video video) {
        return videoService.saveVideo(video);
    }

    @GetMapping
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }

    @GetMapping("/{id}")
    public Video getVideoById(@PathVariable Long id) {
        return videoService.getVideoById(id);
    }

    @PutMapping("/{id}")
    public Video updateVideo(@PathVariable Long id, @RequestBody Video videoDetails) {
        return videoService.updateVideo(id, videoDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteVideo(@PathVariable Long id) {
        videoService.deleteVideo(id);
    }

    @PostMapping("/upload")
    public String uploadVideo(@RequestParam("file") MultipartFile file) {
        fileStorageService.saveFile(file);

        return ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/videos/download/")
                .path(file.getOriginalFilename())
                .toUriString();
    }

    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadVideo(@PathVariable String fileName, HttpServletRequest request) {
        Resource resource = fileStorageService.loadFile(fileName);

        String contentType;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException e) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

}
