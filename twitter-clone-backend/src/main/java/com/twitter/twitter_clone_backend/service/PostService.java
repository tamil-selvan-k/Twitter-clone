package com.twitter.twitter_clone_backend.service;

import com.twitter.twitter_clone_backend.entity.Post;
import com.twitter.twitter_clone_backend.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }
    public List<Post> getAllPosts() {
    return postRepository.findAllByOrderByCreatedAtDesc();
    }

    public Post savePost(Post post) {
        return postRepository.save(post);
    }
}