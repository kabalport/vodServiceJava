package com.example.vodservicejava.Controller;


import com.example.vodservicejava.Domain.Video;
import com.example.vodservicejava.Service.FileStorageService;
import com.example.vodservicejava.Service.VideoService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;


@RestController
@RequestMapping("/api/videos")
public class VideoController {
    @Value("${app.video-dir}")
    private String videoDir;
    private final VideoService videoService;
    private final FileStorageService fileStorageService;

    /**
     * 특정 위치에 upload-dir를 생성하려면 애플리케이션 시작 시에 디렉토리를 생성하는 코드를 추가할 수 있습니다.
     * 이 코드는 애플리케이션 시작 시 upload-dir 디렉토리를 생성합니다. 디렉토리가 이미 존재하면 아무 일도 일어나지 않습니다.
     *
     * 만약 업로드된 파일을 저장하기 위해 다른 경로를 사용하려면, 해당 경로를 upload-dir 대신에 사용하면 됩니다.
     * 예를 들어, /var/www/uploads와 같은 위치를 사용하려면
     * 이 경로를 사용하여 UrlResource를 생성하고 디렉토리를 초기화하는 코드를 수정하면 됩니다.
     */
    @PostConstruct
    public void initUploadFolder() {
        try {
            Files.createDirectories(Paths.get("upload-dir"));
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload directory", e);
        }
    }


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

    @GetMapping("/stream/{filename}")
    public ResponseEntity<Resource> streamVideo(@PathVariable String filename, HttpServletRequest request) {
        Resource video;
        try {
            video = new UrlResource(Paths.get(videoDir+"/" + filename).toUri());
            if (!video.exists() || !video.isReadable()) {
                throw new RuntimeException("Could not read file: " + filename);
            }
            String contentType = request.getServletContext().getMimeType(video.getFile().getAbsolutePath());

            return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(video);
        } catch (MalformedURLException | FileNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
