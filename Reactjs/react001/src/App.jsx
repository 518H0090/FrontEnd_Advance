import { useState } from "react";
import "./App.css";

const defaultFormData = {
  title: "",
  body: "",
};

function App() {
  const [formData, SetFormData] = useState({
    title: "",
    body: "",
  });

  const { title, body } = formData;

  const onChange = (e) =>
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    SetFormData(defaultFormData);
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
    </>
  );
}

export default App;
