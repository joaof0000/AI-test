import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function NewArticle({ handleAddPost }) {
  const [state, setState] = useState({
    caption: "",
    content: "", 
  });


  
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }



  function handleSubmit(e) {
  
   
    console.log(state);
    handleAddPost(state)
    
  }


  function handleClear() {
    setState({
      caption: "",
      content: "",
    });
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
        <Form.TextArea 
          className="form-control"
          name="content"
          value={state.content}
          placeholder="Write your blog post here"
          onChange={handleChange}
          required
        />
        <Button type="submit" className="btn">
          ADD BLOG POST 
        </Button>
        <Button type="reset" className="btn" onClick={handleClear}>
          Clear
        </Button>
      </Form>

    </Segment>
  );
}
