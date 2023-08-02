import tokenService from './tokenService';



const BASE_URL = '/api/users/';




function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
  
    body: user 
  })
  
  .then(res => {
    if (res.ok) return res.json();
    
    throw new Error('Email already taken!');
  })
  
  .then(({token}) => tokenService.setToken(token));
}



function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getProfile(username){
  return fetch(`${BASE_URL}${username}`, {
    method: 'GET',
    headers: {
			
			
			Authorization: "Bearer " + tokenService.getToken() 
			
		}
  }).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // so if everything went well in the response return 
		//the parsed json to where we called the function

		throw new Error('Something went wrong in getAll posts, check the terminal!'); // this will go to the catch block when we call the function in the AddPostPuppyForm
		// handleSubmit
	})
}

export default {
  signup,
  getUser,
  logout,
  login,
  getProfile
};