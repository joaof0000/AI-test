import React from "react";
import "./LoginPage.css";

import {useState} from 'react'

import { Link, useNavigate} from 'react-router-dom'

import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";

import userService from "../../utils/userService";

export default function LoginPage({handleSignUpOrLogin}) {
   
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  // this function takes a path defined in App.js for our routes
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    try {
      await userService.login(state)// making the http request to the server
      navigate('/')
      handleSignUpOrLogin(); // this comes from app.js as a prop, which it gets the token from localstorage and stores the decoded 
      // token in the app.js state

    } catch(err){
      console.log(err)
      setError('check terminal and console')
    }

  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="top">
      <Grid.Column style={{ maxWidth: 350 }}>
        <Header as="h3" color="red" textAlign="left">
          <Image src="https://plus.unsplash.com/premium_photo-1682814732010-d7f4917fad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80https://i.imgur.com/TM4eA5g.jpg" /> Login to your account
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="btn" textAlign="left">
              Login
            </Button>
          </Segment>
          <Message>
            Get on the AI train! <Link to="/signup">Sign up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}
