import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function NewArticle({ handleAddPost }) {
  const [state, setState] = useState({
    caption: "",
    content: "", // Add a new state for the blog content
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Prepare the object to send to the server
    const formData = {
      caption: state.caption,
      content: state.content, // Include the blog content
    };

    // Call handleAddPost, which calls our postsApi.create function in the utils folder
    handleAddPost(formData);
  }

  return (
    <Segment>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="caption"
          value={state.caption}
          placeholder="Create a title for your AI blog"
          onChange={handleChange}
          required
        />
        <Form.TextArea // Use a textarea input for the blog content
          className="form-control"
          name="content"
          value={state.content}
          placeholder="Write your blog post here"
          onChange={handleChange}
          required
        />
        <Button type="submit" className="btn">
          ADD BLOG POST {/* Update the button text */}
        </Button>
      </Form>
    </Segment>
  );
}
