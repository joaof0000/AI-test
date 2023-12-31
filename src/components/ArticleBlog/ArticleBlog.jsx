import { Card } from "semantic-ui-react";
import AddedArticles from "../AddedArticles/AddedArticles";
import "./ArticleBlog.css";

export default function ArticleBlog({
  posts,
  itemsPerRow,
  isProfile,
  addLike,
  removeLike,
  user,
  deletePost,
  updateArticle,
}) {
  const addedArticles = posts.map((post) => {
    return (
      <AddedArticles
        post={post}
        key={post._id}
        isProfile={isProfile}
        addLike={addLike}
        removeLike={removeLike}
        user={user}
        deletePost={deletePost}
        updateArticle={updateArticle}
      />
    );
  });

  return <div className="article-blog-container">{addedArticles}</div>;
}
