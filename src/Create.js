import { useState } from "react";
import { useHistory } from "react-router-dom";
function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Success");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <label htmlFor="body">Description</label>
        <textarea
          id="body"
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Description"
          required
        ></textarea>
        <label htmlFor="author">Author</label>
        <select
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="yoshi">Yoshi</option>
          <option value="mario">Mario</option>
        </select>
        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
