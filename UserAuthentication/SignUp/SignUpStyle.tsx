import { StyleSheet } from 'react-native';


const SignUpStyle = StyleSheet.create({

		signUpContainer:
	{	
		flex: 1,
		paddingTop: 30,
		justifyContent: 'flex-start',
		alignSelf: 'center',
		position: 'relative',
		width: '95%',
	},
	backArrow:
	{	
		left: 10,
		bottom: 20,
		position: 'relative',
  		alignSelf: 'flex-start',
  		fontSize: 25,

	},

	signUpInput:
	{
		alignSelf: 'center',
		alignItems: 'flex-start',
		marginVertical: 20,
	},
	signUpInputHeading:
	{
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#FFF',
	},
	signUpInputSubheading:
	{
		fontSize: 15,
		marginBottom: 20,
		color: '#FFF',
	},

	alreadyHaveContainer:
	{
		justifyContent: 'flex-end',
	},
	alreadyHaveText:
	{
		textAlign: 'center',
		color: '#FFFFFF',
	},

});

export default SignUpStyle;