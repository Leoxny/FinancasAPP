import React, { useState } from 'react';
import { View, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Background, InputMovimentos, SubmitButtonMoviments, SubmitTextMoviments, ViewRegister } from '../../Theme/themeComponents';
import { Header } from '../../components/header';
import { RegisterTypes } from '../../components/registerType';
import { api } from '../../config/config';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export const MovimentacoesRegister = () => {

    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')
    const navigate = useNavigation()

    const handleSubmit = () => {
        Keyboard.dismiss();

        if (isNaN(parseFloat(valueInput)) || type === null) {
            alert('Preencha todos os campos')
            return
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    const handleAdd = async () => {
        try {

            Keyboard.dismiss();

            await api.post('/receive', {
                description: labelInput,
                value: Number(valueInput),
                type: type,
                date: format(new Date(), 'dd/MM/yyyy')
            })

            setLabelInput('')
            setValueInput('')
            navigate.navigate('Menu')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title={"Registrando"} />

                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>

                    <InputMovimentos
                        placeholder="Descrição desse registro"
                        value={labelInput}
                        onChangeText={(label: string) => setLabelInput(label)}
                    />

                    <InputMovimentos
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(label: string) => setValueInput(label)}
                    />

                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

                    <SubmitButtonMoviments onPress={handleSubmit}>
                        <SubmitTextMoviments>Registrar</SubmitTextMoviments>
                    </SubmitButtonMoviments>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}

