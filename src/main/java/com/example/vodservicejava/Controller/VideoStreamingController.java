package com.example.vodservicejava.Controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class VideoStreamingController {

    @GetMapping("/video")
    public ResponseEntity<Resource> streamVideo() throws MalformedURLException {
        Path path = Paths.get("src/main/resources/video.mp4");
        Resource videoResource = new UrlResource(path.toUri());
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, "video/mp4")
                .body(videoResource);
    }
}
