import "./App.css";
import FetchedPosts from "./Components/FetchedPosts";
import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <PostForm />
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
