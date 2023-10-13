import React from 'react'
import { HomeScreen } from '../pages/Main/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { colors } from '../Theme/themeColor';
import { MovimentacoesRegister } from '../pages/Register/MovimentacoeRegister';
import { ProfileScreen } from '../pages/Main/ProfileScreen';
import { CustomDrawer } from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export const AppRoutes = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: colors.white,
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor: colors.background,
                drawerActiveTintColor: colors.white,
                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <Drawer.Screen
                name="Menu"
                component={HomeScreen}
            />
            <Drawer.Screen
                name="Registrar"
                component={MovimentacoesRegister}
            />
            <Drawer.Screen
                name="Perfil"
                component={ProfileScreen}
            />
        </Drawer.Navigator>
    )
}