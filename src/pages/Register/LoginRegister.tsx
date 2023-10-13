import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, Logo } from '../../Theme/themeComponents';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../Theme/themeColor';
import { AppContext } from '../../Context/AppContext';
import { useNavigation } from '@react-navigation/native'

export const LoginRegister = () => {

    const { singUp, loadingAuth } = useContext(AppContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigation = useNavigation()

    const handleSubmit = () => {
        singUp(nome, email, senha)
        navigation.goBack()
    }

    const validaDados = async () => {
        if (nome === '') {
            alert("Atenção Informe o seu nome")
        } else if (email === '') {
            alert("Atenção Informe o seu email")
        } else if (senha === '') {
            alert("Atençã Informe a sua senha")
        } else {
            handleSubmit()
        }
    }

    return (
        <Background>

            <StatusBar style="light" backgroundColor={colors.background} />


            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

                <Logo source={require('../Assets/Logo.png')} />

                <AreaInput>
                    <Input placeholder="Seu nome" value={nome} onChangeText={(value) => setNome(value)} />
                </AreaInput>

                <AreaInput>
                    <Input placeholder="Email" value={email} onChangeText={(value) => setEmail(value)} />
                </AreaInput>

                <AreaInput>
                    <Input placeholder="Senhha" value={senha} onChangeText={(value) => setSenha(value)} secureTextEntry={true} />
                </AreaInput>

                <SubmitButton onPress={validaDados}>
                    {loadingAuth ? (
                        <ActivityIndicator size={20} color={colors.white} />
                    ) : (
                        <SubmitText>Cadastrar</SubmitText>
                    )}
                </SubmitButton>

            </Container>
        </Background>
    )
}

