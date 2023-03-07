import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch(`http://localhost:8080/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push(`/blogs/${id}`);
    });
  };

  return (
    <div className="create">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Update Blog</button>}
        {isPending && <button disabled>Updating Blog</button>}
      </form>
    </div>
  );
};

export default EditBlog;
