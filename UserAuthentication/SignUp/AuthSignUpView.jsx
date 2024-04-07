import React, { useState } from 'react';
import {SafeAreaView, View, TextInput, Button, Alert, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthViewModel from '../../AuthViewModel';

import * as BC from '../../BaseComponents/BaseComponents';
// import * as SUC from '../../Displaced Files/SignUp/SignUpComponents';
import * as SUC from './SignUpComponents';

import AuthStyles from '../../AuthStyles';
// import SignUpStyle from '../../Displaced Files/SignUp/SignUpStyle';
import SignUpStyle from './SignUpStyle';

const AuthSignUpView = () =>
{
	const navigation = useNavigation();

	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');

	const attemptSignUp = async () =>
	{
		const attempt = await AuthViewModel.createUser(user, pass);

		if (attempt)
		{
			Alert.alert(
				'Signup successful',

			)
			navigation.navigate('Home');
			console.log('User created')
			console.log('Logging User In')
			// console.log('Logging in');
			console.log('User', user);
			console.log('Pass', pass);

		}
		else
		{
			Alert.alert('Signup Failed');
		}

	};

	// Returns User to Login Screen
	const returnLoginArrow = () =>
	{
		Alert.alert(
			'Do you want to stop creating your account?',
			'If you stop now, you\'ll lose any progress you\'ve made.',
			[
				{
					text: 'Stop creating account',
					onPress: () => 
					{
						navigation.navigate('Login');
						console.log('Stopped account creation going back to login')
					}
				},
				{
					text: 'Continue creating account',
					onPress: () => console.log('Continued account creation')
				}
			]
		)
	};

	const returnLogin = () =>
	{
		console.log("THIS WAS PORESSD");
		Alert.alert(
			'Already have an account?',
			undefined,
			[
				{
					text: 'Log in',
					onPress: () => 
					{
						navigation.navigate('Login');
						console.log('Stopped account creation going back to login')
					}
				},
				{
					text: 'Continue creating account',
					onPress: () => console.log('Continued account creation')
				}
			]
		)
	};

	return (
		<BC.PrimaryBackground>
			<SafeAreaView style={AuthStyles.safeZone}>
				<View style={SignUpStyle.signUpContainer}>
					<TouchableOpacity onPress={returnLoginArrow}>
						<Icon name="arrow-back-ios"color="#FFF" style={SignUpStyle.backArrow}/>
					</TouchableOpacity>
					{/* Username */}
					<SUC.SignUpInput
						//heading="What's your mobile number?"
						// heading={"Enter the mobile number                       "}
						// subheading={"Enter the mobile number where you can be contacted.\nNo one will see this on your profile."}
						userNamePlaceholder="Mobile number"
						value={user}
						onChangeText={setUser}

						
						// keyboardType="phone-pad"
						style={{	
							container: SignUpStyle.signUpInput,
							heading: SignUpStyle.signUpInputHeading,
							subheading: SignUpStyle.signUpInputSubheading
						}}
					/>
					{/* Password */}
					<SUC.SignUpInput
						// heading={"Enter the mobile number                       "}
						subheading={"Please enter a strong password"}
						passwordPlaceholder="Password"
						secureTextEntry={true}
						value={pass}
						onChangeText={setPass}
						// keyboardType="phone-pad"
						style={{	
							container: SignUpStyle.signUpInput,
							heading: SignUpStyle.signUpInputHeading,
							subheading: SignUpStyle.signUpInputSubheading
						}}
					/>					
					<TouchableOpacity onPress={attemptSignUp} style={AuthStyles.loginButton}>
						<Text style={AuthStyles.loginButtonText}>Create Account</Text>				
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={SignUpStyle.alreadyHaveContainer}>
					<Text onPress={returnLogin} style={SignUpStyle.alreadyHaveText}>Already have an account?</Text>				
				</TouchableOpacity>
			</SafeAreaView>
		</BC.PrimaryBackground>
	);
};

export default AuthSignUpView;