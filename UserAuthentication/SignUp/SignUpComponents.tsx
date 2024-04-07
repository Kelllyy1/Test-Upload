import React, {useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { TextInput, Text, View, StyleSheet, TextInputProps, TextStyle, ViewStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as BC from '../../BaseComponents/BaseComponents';
import SignUpComponentStyle from './SignUpComponentStyle';

interface SignUpInputProps
{
	heading?: string;
	subheading?: string;
	userNamePlaceholder?: string;
	passwordPlaceholder?: string;
	style?:
	{
		container?: ViewStyle;
		heading?: TextStyle;
		subheading?: TextStyle;
		textInputStyle?: TextStyle;
	};
}

export const SignUpInput: React.FC<SignUpInputProps> = ({heading, subheading, userNamePlaceholder, passwordPlaceholder, style, ...props}) => {

	const containerStyle = [SignUpComponentStyle.container, style?.container];
	const headingStyle = [SignUpComponentStyle.heading, style?.heading];
	const subheadingStyle = [SignUpComponentStyle.subheading, style?.subheading];
	const textInputStyle= [style?.textInputStyle];

	return (
		<View style={containerStyle}>
			{heading && <Text style={headingStyle}>
				{heading}
			</Text>}
			{subheading && <Text style={subheadingStyle}>
				{subheading}
			</Text>}
			{/* Username */}
			<BC.PrimaryTextInput
				style={{
					container: SignUpComponentStyle.textInput, ...textInputStyle
				}
				}
				placeholder={userNamePlaceholder}
				{...props}
			/>
			{/* Password */}
			<BC.PrimaryTextInput
				style={{
					container: SignUpComponentStyle.textInput, ...textInputStyle
				}
				}
				placeholder={passwordPlaceholder}
				{...props}
			/>
		</View>
	);
};
