import useFetch from "./useFetch";
import BlogList from "./Bloglist";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2>Home</h2>
      {blogs && <BlogList blogs={blogs} />}
      {isPending && <div>Loading . . .</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
