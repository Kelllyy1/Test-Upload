import React, { useState, useRef, forwardRef} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthViewModel from '../../AuthViewModel';
import AuthStyles from '../../AuthStyles';
import axios from 'axios';
import * as BC from '../../BaseComponents/BaseComponents';


const AuthLoginView = () =>
{
	const navigation = useNavigation();

	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');

	//	TODO: Wrap this in a try-catch
	// if (response.data.successful) may be better here instead of if(attempt)
	const attemptLogin = async () =>
	{
		const attempt = await AuthViewModel.login(user, pass);

		if (attempt)
		{
			// Alert.alert('Login successful');
			Alert.alert(
				'Login successful',
				// [
					// {
					// 	text: 'Logging User In',
					// 	onPress: () => 
					// 	{
					// 		navigation.navigate('Home');
					// 		console.log('Logging User In')
					// 	}
					// }
				// ]
			)
			navigation.navigate('Home');
			console.log('Logging User In')
			// console.log('Logging in');
			console.log('User', user);
			console.log('Pass', pass);

			// Navigate to Homepage if login is successful, doesn't work
			// navigation.navigate('/HomePage.tsx');
		}
		else
		{
			Alert.alert('Login Failed');
		}

	};

	const sendToSignUp = () => 
	{
		navigation.navigate('SignUp')
	}

	const forgotPass = () =>
	{
		Alert.alert('Uh oh Forgot my password... do stuff');
	}

	return (
		<BC.PrimaryBackground>
			<SafeAreaView style={AuthStyles.safeZone}>
				<View style={AuthStyles.container}>
					<BC.PrimaryTextInput
						placeholder="Username, email, or mobile number"
						placeholderTextColor='#FFF'
						value={user}
						onChangeText={setUser}
						selectionColor='#FFF'
					/>
					<BC.PrimaryTextInput
						placeholder="Password"
						placeholderTextColor='#FFF'
						value={pass}
						onChangeText={setPass}
						secureTextEntry={true}
						selectionColor={'#FFF'}
						returnKeyType="done"
						onSubmitEditing={attemptLogin}
					/>
					<TouchableOpacity onPress={attemptLogin} style={AuthStyles.loginButton}>
						<Text style={AuthStyles.loginButtonText}>Login</Text>				
					</TouchableOpacity>
					<Button title="Forgot Password?" onPress={forgotPass}/>
					<TouchableOpacity onPress={sendToSignUp} style={AuthStyles.createAccountButton}>
						<Text style={AuthStyles.createAccountButtonText}>Create new account</Text>				
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</BC.PrimaryBackground>
	);
};

export default AuthLoginView;