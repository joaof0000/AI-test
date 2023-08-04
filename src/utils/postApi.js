

import tokenService from "./tokenService";

const BASE_URL = '/api/posts/';

export function create(data){
	return fetch(BASE_URL, {
		method: 'POST',
		body: JSON.stringify(data),
	



		headers: {
			
			'Content-Type': 'application/json',
			Authorization: "Bearer " + tokenService.getToken() 
			
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() 
		

		throw new Error('Something went wrong in create Post'); 
		
	})
}


export function getAll(){
	return fetch(BASE_URL, {
		method: 'GET',
	    headers: {
			
			
			Authorization: "Bearer " + tokenService.getToken() 
			
		}	
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() 
		

		throw new Error('Something went wrong in getAll posts, check the terminal!'); 
	
	})
}