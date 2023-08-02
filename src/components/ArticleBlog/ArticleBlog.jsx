import { Card } from "semantic-ui-react";
import AddedArticles from "../AddedArticles/AddedArticles";

export default function ArticleBlog({
  posts,
  itemsPerRow,
  isProfile,
  addLike,
  removeLike,
  user,
}) {
  const addedArticless = posts.map((post) => {
    return (
      <AddedArticles
        post={post}
        key={post._id}
        isProfile={isProfile}
        addLike={addLike}
        removeLike={removeLike}
        user={user}
      />
    );
  });

  return <Card.Group itemsPerRow={itemsPerRow}>{addedArticless}</Card.Group>;
}
