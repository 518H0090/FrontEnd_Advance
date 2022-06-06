import { useState } from "react";
import "./App.css";
import axios from "axios";

const defaultFormData = {
  title: "",
  body: "",
  userId: 1,
};

function App() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, SetFormData] = useState({ defaultFormData });

  const { title, body } = formData;

  const onChange = (e) =>
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      setSuccess(true);
    } catch (error) {}
    SetFormData(defaultFormData);
    setError(true);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={onChange} />

        <br />
        <br />
        <label htmlFor="body">Body</label>
        <input type="text" id="body" value={body} onChange={onChange} />

        <br />
        <br />
        <button type="submit">Upload Post</button>
      </form>

      {success && <p>Post Upload Success</p>}
      {error && <p>Can't uploads</p>}
    </>
  );
}

export default App;
