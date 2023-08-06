import { Card } from "semantic-ui-react";
import AddedArticles from "../AddedArticles/AddedArticles";

export default function ArticleBlog({
  posts,
  itemsPerRow,
  isProfile,
  addLike,
  removeLike,
  user,
  deletePost
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
      />
    );
  });

  return <Card.Group itemsPerRow={itemsPerRow}>{addedArticles}</Card.Group>;
}
