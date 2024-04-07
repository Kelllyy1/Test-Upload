import { StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/*
	Styles for Base Components
*/

const screenDimensions = Dimensions.get('window');
const BaseComponentStyle = StyleSheet.create({

	primaryBackground:
	{
		flex: 1,
		...StyleSheet.absoluteFillObject,
	},
	primaryBackgroundMask:
	{
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},

	primaryTextInputContainer:
	{
		borderWidth: 0.75,
		borderRadius: 10,
		marginVertical: 5,
		textAlign: 'left',
		justifyContent: 'center',
		color: '#FFFFFF',
		borderColor: '#FFFFFF',
		backgroundColor: 'rgba(0,0,0,0.5)',
		minHeight: 62,
		width: '100%',
	},
	primaryTextInputPlaceholder:
	{
		position: 'absolute',
		left: 15,
		fontSize: 16,
		color: '#FFFFFF66',
		justifyContent: 'center',
		textAlign: 'left',
	},
	primaryTextInputPlaceholderShift:
	{
		position: 'absolute',
		left: 15,
		top: 5,
		fontSize: 12,
		color: '#FFF',
	},
	primaryTextInputText:
	{
		fontSize: 16,
		color: '#FFF',
		left: 15,
		top: 5,
		justifyContent: 'center',
		textAlign: 'left',
	},
	primaryTextInputDynamicContainer:
	{
		position: 'absolute',
		...screenDimensions,
	}


});

export default BaseComponentStyle;