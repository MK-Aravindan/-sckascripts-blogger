import { Link } from "react-router-dom";
import { useState } from "react";

const Bloglist = ({ blogs }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="blog-list">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>{" "}
      <div className="search-box-line"></div>
      {blogs
        .filter((blog) => {
          const title = blog.title.toLowerCase();
          const author = blog.author.toLowerCase();
          const searchString = search.toLowerCase();

          return (
            title.includes(searchString) ||
            author.includes(searchString)
          );
        })
        .map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Bloglist;
