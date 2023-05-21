package com.example.vodservicejava.Service;

import com.example.vodservicejava.Domain.Video;
import com.example.vodservicejava.Repository.VideoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class VideoService {

    private final VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public Video saveVideo(Video video) {
        return videoRepository.save(video);
    }

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public Video getVideoById(Long id) {
        return videoRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Video not found with id " + id));
    }

    public Video updateVideo(Long id, Video videoDetails) {
        Video video = getVideoById(id);
        video.setTitle(videoDetails.getTitle());
        video.setUrl(videoDetails.getUrl());
        return videoRepository.save(video);
    }

    public void deleteVideo(Long id) {
        Video video = getVideoById(id);
        videoRepository.delete(video);
    }
}
