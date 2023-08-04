import { Card, Icon, Image } from "semantic-ui-react";

function AddedArticles({ post, isProfile, addLike, removeLike, user }) {
  const likedIndex = post.likes.findIndex(
    (like) => like.username === user.username
  );

  const likeColor = likedIndex > -1 ? "red" : "grey";

  const clickHandler =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id)
      : () => addLike(post._id);

  return (
    <Card key={post._id}>
      {isProfile ? null : (
        <Card.Content textAlign="left">
          <Image
            floated="left"
            size="large"
            avatar
            src={
              post?.user?.photoUrl
                ? post.user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
          />
          <Card.Header floated="right">{post?.user?.username}</Card.Header>
        </Card.Content>
      )}

   
      <Card.Content>
        <Card.Description>{post.caption}</Card.Description>
      </Card.Content>
      <Card.Content>
      <Card.Description>{post.content}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon
          name={"heart"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
      </Card.Content>
    </Card>
  );
}

export default AddedArticles;
