import { useEffect, useState } from "react";
import NewsContiner from "./NewsContiner";
const News = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <div className="flex">
      {
        post.map((comment) => (
          <NewsContiner key={comment.id} title={comment.title} body={comment.body} />
        ))
      }

    </div>
  );
};

export default News;