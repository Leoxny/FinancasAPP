import React, { useState, useContext } from 'react';
import { Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText, LinkText, Link } from '../../Theme/themeComponents';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../../Context/AppContext';

export const LoginScreen = () => {

    const { singIn, loadingAuth } = useContext(AppContext)
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        singIn(email, password)
        navigation.navigate('HomeScreen')
    }

    const validaDados = async () => {
        if (email === '') {
            alert('Insira um email')
        } else if (password === '') {
            alert('Insira sua senha')
        } else {
            handleSubmit()
        }
    }

    return (
        <Background>

            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

                <Logo source={require('../Assets/Logo.png')} />

                <AreaInput>
                    <Input placeholder="Seu email" value={email} onChangeText={(value) => setEmail(value)} />
                </AreaInput>

                <AreaInput>
                    <Input placeholder="Sua senha" value={password} onChangeText={(value) => setPassword(value)} />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={validaDados}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('LoginRegister')}>
                    <LinkText>Criar sua conta!</LinkText>
                </Link>

            </Container>
        </Background>
    )
}
