import React, {useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { TextInput, Text, View, StyleSheet, TextInputProps} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import BaseComponentStyle from './BaseComponentStyle';


/*
  Typescript requires that components have interfaces for type safety
  and to get a better view of what props are allowed
*/
interface GradientBackgroundProps 
{
  colors?: string[]; // Array of colors for the gradient
  style?: any; // Additional styles for the gradient background
  children?: React.ReactNode; // Optional children components
}

interface PrimaryTextInputProps extends TextInputProps
{
  placeholder?: string;
  style?:
  {
    container?: ViewStyle;
    placeholder?: TextStyle;
    input?: TextStyle;
  };
}

/*
    Component that sets the background when used
*/
export const PrimaryBackground: React.FC<GradientBackgroundProps> = ({colors = ['#3F51B5','#03A9F4'], style, children }) => {
  return (
    <LinearGradient colors={colors} style={[BaseComponentStyle.primaryBackground, style]}>
      <View style={[BaseComponentStyle.primaryBackgroundMask]}>
      {children}
       </View>
    </LinearGradient>
  );
};

/*
    Custom text input component

    -- Note: Must set the value in order for animation to work
*/
export const PrimaryTextInput: React.FC<{placeholder: string}> = ({placeholder, style, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasText(Boolean(props.value));
  }

  const containerStyle = [BaseComponentStyle.primaryTextInputContainer, {height: (isFocused || hasText) ? 60 : 50}, {borderColor: isFocused ? '#FFF' : '#333333'}, style];
  const placeholderStyle = [BaseComponentStyle.primaryTextInputPlaceholder, (isFocused || hasText) ? BaseComponentStyle.primaryTextInputPlaceholderShift : null];
  const inputStyle = [BaseComponentStyle.primaryTextInputText];

  return (
    <View style={containerStyle}>
      <Text style={placeholderStyle}>
        {placeholder}
      </Text>
      <TextInput
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
};