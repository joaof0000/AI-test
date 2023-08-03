import { useState } from 'react'
import userService from '../../utils/userService'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";


import { useNavigate } from 'react-router-dom';

export default function SignUpPage({handleSignUpOrLogin}){

		const [state, setState] = useState({
			username: '',
			email: '',
			password: '',
			passwordConf: '',
			bio: ''
		})
		
		// this state will handle the file upload
		const [selectedFile, setSelectedFile] = useState('')

		const [error, setError] = useState('');
		
		// navigate is a function that just takes a path
		// the path should match a route defined in the App.js
		const navigate = useNavigate()

		function handleChange(e){

			setState({
				...state,
				[e.target.name]: e.target.value
			})
		}	

		function handleFileInput(e){
			setSelectedFile(e.target.files[0])
		}

		async function handleSubmit(e){
			e.preventDefault();

			// ANYTIME YOU'RE SENDING A FILE TO THE SERVER
			// You must create formdata!
			// This needs to be done because the http request
			// will be sent in two parts, the text, and the file
			const formData = new FormData();
			// key on req.file would be photo, 
			formData.append('photo', selectedFile);
			// req.body formdata
			formData.append('username', state.username)
			formData.append('email', state.email)
			formData.append('password', state.password)	
			formData.append('bio', state.bio)

			// this for loop does the same thing as the code above ^^^
			// for (let key in state){
			// 	formData.append(key, state[fieldName])
			// }



			try {
				// this line of code is making the fetch request to the server
				// and sending our state object
				// this is calling the signup fetch function defined in our utils/userService
				const signUp = await userService.signup(formData)
				console.log(signUp)
				// navigate the user to the home page!
				navigate('/');
				handleSignUpOrLogin(); // this function comes from the APP component

			} catch(err){
				console.log(err, ' err in handleSubmit');
				setError('Check your terminal for your error and the chrome console!')
			}

		}
	
		return (
			<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="top">
			 <Grid.Column style={{ maxWidth: 350 }}>
				<Header as="h3" color="red" textAlign="center">
				 <Image src="https://plus.unsplash.com/premium_photo-1682814732010-d7f4917fad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" /> Sign Up
			   </Header>
			   <Form autoComplete="off" onSubmit={handleSubmit}>
				 <Segment stacked>
				   <Form.Input
					 name="username"
					 placeholder="username"
					 value={state.username}
					 onChange={handleChange}
					 required
				   />
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
				   <Form.Input
					 name="passwordConf"
					 type="password"
					 placeholder="Confirm Password"
					 value={state.passwordConf}
					 onChange={handleChange}
					 required
				   />
				   <Form.TextArea
					 label="bio"
					 name="bio"
					 placeholder="Tell us more about your dogs..."
					 value={state.bio}
					 onChange={handleChange}
				   />
				   <Form.Field>
					 <Form.Input
					   type="file"
					   name="photo"
					   placeholder="upload image"
					   onChange={handleFileInput}
					 />
				   </Form.Field>
				   <Button type="submit" className="btn">
					 Signup
				   </Button>
				 </Segment>
				 {error ? <ErrorMessage error={error} /> : null}
			   </Form>
			 </Grid.Column>
		   </Grid>
	   
			 );
	   
		}
