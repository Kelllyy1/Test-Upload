import { createStackNavigator } from '@react-navigation/stack';
import AuthLoginView from './(tabs)/Login/AuthLoginView';
import AuthSignUpView from './(tabs)/SignUp/AuthSignUpView';
import AuthHomeView from './(tabs)/Home/AuthHomeView';

const Stack = createStackNavigator();

const AuthNavigator = () =>
{
	return (
		<Stack.Navigator 
			initialRouteName="Login"
			screenOptions={{headerShown: false}}
		>
			<Stack.Screen name="Login" component={AuthLoginView}/>
			<Stack.Screen name="SignUp" component={AuthSignUpView}/>
			<Stack.Screen name="Home" component={AuthHomeView}/>
		</Stack.Navigator>
	);
};

export default AuthNavigator;