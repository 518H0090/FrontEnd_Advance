import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [dataGet, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {error && "Oops Not Valid"}

      {/* Conditional Rendering */}
      {/* Logic loading */}
      {loading && "Loading..."}

      {dataGet &&
        dataGet.map((post) => {
          const { id, title, body } = post;

          return (
            <article key={id}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </article>
          );
        })}
    </>
  );
}
