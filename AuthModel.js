//	Notes:
/*	Login: works in api tester & emulator/phone
	Create account: works in api tester & currently does not work in emulator/app
*/

import axios from 'axios';
// import EditScreenInfo from '@/components/EditScreenInfo';

// Handles business logic of user authentication
class AuthModel
{
	/*
		Authentication logic send request verify login credentials
		Return true if success, false otherwise
	*/
	static async loginUser(user, pass)
	{
		try {
	  
			//  Method 2 - Send user data to the MongoDB database
			//	TODO: replace the description for "url" with your public ip address
			//	To test on your phone: should be: url: 'http://your_public_ip:5000/login'; (for Windows: open the cmd terminal, enter "ipconfig", use the ipv4 address; Google your way if you have a mac)
			//	To test on emulator: use url: 'http://10.0.2.2:5000/login' if you're using an emulator (or maybe 10.0.0.2);
			const response = await axios({
			  method: 'post',
			  url: 'http://your_public_ip_address:5000/login',
			  data: {
				username: user,
				password: pass,
			  }
			});
	  
			console.log('Data sent successfully:', response.data);
			return true;	//	Maybe turn into a variable for better readability
		  } catch (error) {
			console.error('Error sending data:', error);
		  }
	}

	/* 
		Creating account
		Return true if success, false otherwise
	*/

	//	Notes:
	/*	We need more textfields for user information like "Name", "Password", "Email" and I added a submit button on this local copy of the app*/
	static async createUser(user, pass)
	{
		try {
	  
			//	TODO: Add more fields for user data
			//  Method 2 - Send user data to the MongoDB database
			const response = await axios({
			  method: 'post',
			  url: 'http://your_public_ip_address/register',
			  data: {
				username: user,
				password: pass,	//	Did this to test this function, since server.js expects username & password with a post request
			  }
			});
	  
			console.log('Data sent successfully:', response.data);
			return true;	//	Maybe turn into a variable for better readability
		  } catch (error) {
			console.error('Error sending data:', error);
		  }
	}
}

export default AuthModel;