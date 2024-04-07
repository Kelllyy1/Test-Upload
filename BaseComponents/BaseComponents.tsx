import React, {useRef, useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Text, View, TextInputProps, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
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
    containerStyle?: ViewStyle;
    placeholderStyle?: TextStyle;
    inputStyle?: TextStyle;
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
export const PrimaryTextInput: React.FC<PrimaryTextInputProps> = ({placeholder, style, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);
  
  onTap = () => 
  {
    if (isFocused)
    {
      Keyboard.dismiss();
    }
  }

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasText(Boolean(props.value));
  };

  const containerStyle = [BaseComponentStyle.primaryTextInputContainer, {height: (isFocused || hasText) ? 60 : 50}, {borderColor: isFocused ? '#FFF' : '#FFFFFF66'}, style?.containerStyle];
  const placeholderStyle = [BaseComponentStyle.primaryTextInputPlaceholder, (isFocused || hasText) ? BaseComponentStyle.primaryTextInputPlaceholderShift : null];
  const inputStyle = [BaseComponentStyle.primaryTextInputText, style?.inputStyle];

  return (
      <TouchableWithoutFeedback onPress={onTap}>
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
        {isFocused && (
          <TouchableWithoutFeedback onPress={onTap}>
            <View style={BaseComponentStyle.primaryTextInputDynamicContainer} />
          </TouchableWithoutFeedback>
        )}
      </View>
      </TouchableWithoutFeedback>
  );
};