import React, { useContext } from 'react';
import { View } from 'react-native';
import { ContainerProfile, Message, Name, NewLink, NewText, LogoutButton, LogoutText } from '../../Theme/themeComponents';
import { Header } from '../../components/header';
import { AppContext } from '../../Context/AppContext';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {

    const { user, signOut } = useContext(AppContext)
    const navigation = useNavigation()
    
    return (
        <ContainerProfile>
            <Header title={'Meu perfil'} />

            <Message>Hey, bem vindo de volta</Message>

            <Name numberOfLines={1}>{user && user.name}</Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButton onPress={() => signOut}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </ContainerProfile>
    )
}

