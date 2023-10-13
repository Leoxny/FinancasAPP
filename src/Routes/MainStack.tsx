import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { AppContext } from '../Context/AppContext';
import { colors } from '../Theme/themeColor';

export const MainStack = () => {

    const { signed, loading } = useContext(AppContext);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>
                <ActivityIndicator size={"large"} color={"#131313"} />
            </View>
        )
    }
    return (

        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

