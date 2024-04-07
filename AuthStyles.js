import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AuthStyles = StyleSheet.create({

	safeZone:
	{
		flex: 1,
	},


	container:
	{
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		width: '95%',
	},

	loginButton:
	{
		height: 40,
  		width: '100%',
  		borderWidth: 1,
 		borderRadius: 10, 
  		borderColor: '#5C6BC0',
  		backgroundColor: '#5C6BC0',
  		justifyContent: 'center',
  		alignItems: 'center',
  		margin: 5,
  	},
  	loginButtonText:
  	{
  		color: '#FFFFFF',
  		fontSize: 16,
  	},

	forgotPassButton:
	{

	},

	createAccountButton:
	{
		height: 40,
  		width: '95%',
  		borderWidth: 1,
 		borderRadius: 5, 
  		borderColor: '#FFC107',
  		backgroundColor: 'transparent',
  		justifyContent: 'center',
  		alignItems: 'center',
	},
	createAccountButtonText:
	{
		color: '#FFC107',
		fontSize: 18,
	},

});

export default AuthStyles;