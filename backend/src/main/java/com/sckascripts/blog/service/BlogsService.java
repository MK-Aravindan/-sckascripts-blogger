package com.sckascripts.blog.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sckascripts.blog.entity.Blogs;
import com.sckascripts.blog.repository.BlogsRepository;

@Service
public class BlogsService {

    @Autowired
    private BlogsRepository blogsRepository;
    
    public Blogs saveBlogs(Blogs blogs) {
        return blogsRepository.save(blogs);
    }

    public List<Blogs> fetchBlogsList() {
        return blogsRepository.findAll();
    }

    public Blogs fetchBlogsById(Long blogsId) {
        return blogsRepository.findById(blogsId).get();
    }

    public void deleteBlogsById(Long blogsId) {
        blogsRepository.deleteById(blogsId);
    }

    public Blogs updateBlogs(Long blogsId, Blogs blogs) {
        Blogs blogsDB = blogsRepository.findById(blogsId).get();

        if(Objects.nonNull(blogs.getTitle()) && !"".equalsIgnoreCase(blogs.getTitle())) {
            blogsDB.setTitle(blogs.getTitle());
        }

        if(Objects.nonNull(blogs.getBody()) && !"".equalsIgnoreCase(blogs.getBody())) {
            blogsDB.setBody(blogs.getBody());
        }

        if(Objects.nonNull(blogs.getAuthor()) && !"".equalsIgnoreCase(blogs.getAuthor())) {
            blogsDB.setAuthor(blogs.getAuthor());
        }

        return blogsRepository.save(blogsDB);
    }
}
