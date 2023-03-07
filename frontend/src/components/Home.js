import Bloglist from "./Bloglist.js";
import UseFetch from "./useFetch.js";

const Home = () => {
  const { blogs, isPending } = UseFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Home;
