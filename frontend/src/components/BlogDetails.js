import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, isPending } = UseFetch("http://localhost:8080/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8080/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const handleEdit = () => {
    history.push(`/edit/${id}`)
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <div>{blogs.body}</div>
          <h4>Written by {blogs.author}</h4> <hr />
          <button className="delete" onClick={handleClick}>Delete</button>
          <button className="edit" onClick={handleEdit}>Edit</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
