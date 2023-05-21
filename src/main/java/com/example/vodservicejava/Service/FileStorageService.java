package com.example.vodservicejava.Service;
import com.example.vodservicejava.Exception.StorageException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.*;

@Service
public class FileStorageService {

    @Value("${app.video-dir}")
    private String videoDir;

    public void saveFile(MultipartFile file) {
        try {
            if (file.isEmpty()) {
                throw new StorageException("Failed to store empty file");
            }
            Path destinationFile = Paths.get(videoDir)
                    .resolve(Paths.get(file.getOriginalFilename()))
                    .normalize().toAbsolutePath();
            if (!destinationFile.getParent().equals(Paths.get(videoDir).toAbsolutePath())) {
                throw new StorageException("Cannot store file outside current directory.");
            }
            file.transferTo(destinationFile.toFile());
        } catch (IOException e) {
            throw new StorageException("Failed to store file", e);
        }
    }

    public Resource loadFile(String filename) {
        try {
            Path file = Paths.get(videoDir).resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageException("Could not read file: " + filename);
            }
        } catch (MalformedURLException e) {
            throw new StorageException("Could not read file: " + filename, e);
        }
    }
}
