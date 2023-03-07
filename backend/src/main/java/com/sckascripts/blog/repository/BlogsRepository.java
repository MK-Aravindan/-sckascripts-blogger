package com.sckascripts.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sckascripts.blog.entity.Blogs;

public interface BlogsRepository extends JpaRepository<Blogs, Long> {
    
}
