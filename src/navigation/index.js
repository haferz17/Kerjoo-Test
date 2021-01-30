import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Home } from '../containers';
import { SPLASH, LOGIN, HOME } from '../config/navigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name={SPLASH} component={Splash} />
                <Stack.Screen name={LOGIN} component={Login} />
                <Stack.Screen name={HOME} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;