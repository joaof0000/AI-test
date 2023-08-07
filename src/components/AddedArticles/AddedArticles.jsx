import { Card, Icon, Image, Button } from "semantic-ui-react";
import { deleteArticle } from "../../utils/updateApi";

function AddedArticles({ post, isProfile, addLike, removeLike, user }) {
  const likedIndex = post.likes.findIndex((like) => like.username === user.username);

  const likeColor = likedIndex > -1 ? "blue" : "yellow";

  const clickHandler =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id)
      : () => addLike(post._id);

  const handleDelete = () => {
    deleteArticle(post._id);
  };

  const handleEdit = () => {
    editPost(post);
  };

  return (
    <div className="adddedarticles-container">
    <Card key={post._id} className="post-card">
      {!isProfile && (
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
      <Card.Content extra textAlign="right">
        <Icon
          name="computer"
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
      </Card.Content>
      <Card.Content extra textAlign="right">
        <Icon
          name="favorite"
          size="small"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
      </Card.Content>
      {isProfile && (
        <Card.Content extra textAlign="right">
          <Button color="blue" onClick={handleEdit}>
            <Icon name="edit" />
            Edit
          </Button>
          <Button color="red" onClick={handleDelete}>
            <Icon name="trash" />
            Delete
          </Button>
        </Card.Content>
      )}
    </Card>
    </div>
  );
}

export default AddedArticles;
