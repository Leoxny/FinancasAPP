import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginRegister } from '../pages/Register/LoginRegister';
import { LoginScreen } from '../pages/Main/LoginScreen';
import { colors } from '../Theme/themeColor';

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name='LoginRegister'
                component={LoginRegister}
                options={{
                    headerStyle: {
                        backgroundColor: colors.background,
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a',
                    },
                    headerTintColor: colors.white,
                    headerTitle: 'Voltar',
                    headerBackTitle: false
                }}
            />
        </Stack.Navigator>
    )
}