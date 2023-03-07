package com.sckascripts.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sckascripts.blog.entity.Blogs;
import com.sckascripts.blog.service.BlogsService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BlogsController {

    @Autowired
    private BlogsService blogsService;

    @PostMapping("/blogs")
    public Blogs saveDepartment(@RequestBody Blogs blogs) {
        return blogsService.saveBlogs(blogs);
    }

    @GetMapping("/blogs")
    public List<Blogs> fetchBlogsList() {
        return blogsService.fetchBlogsList();
    }

    @GetMapping("/blogs/{id}")
    public Blogs fetchBlogsById(@PathVariable("id") Long blogsId) {
        return blogsService.fetchBlogsById(blogsId);
    }

    @DeleteMapping("/blogs/{id}")
    public String deleteBlogsById(@PathVariable("id") Long blogsId) {
        blogsService.deleteBlogsById(blogsId);
        return "Blog Deleted Successfully";
    }

    @PutMapping("/blogs/{id}")
    public Blogs updateBlogs(@PathVariable("id") Long blogsId, @RequestBody Blogs blogs) {
        return blogsService.updateBlogs(blogsId,blogs);
    }
    
}
