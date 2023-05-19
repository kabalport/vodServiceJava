package com.example.vodservicejava.Controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

@RestController
public class VideoController {

    private static final String VIDEO_PATH = "C:/videos/";

    @GetMapping("/videos/{filename}")
    public ResponseEntity<Resource> streamVideo(@PathVariable String filename) throws FileNotFoundException {
        File videoFile = new File(VIDEO_PATH + filename);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(videoFile));

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf("video/mp4"))
                .body(resource);
    }
}
