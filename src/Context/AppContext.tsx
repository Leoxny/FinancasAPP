import React, { createContext, useState, useEffect } from "react";
import { api } from "../config/config";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorage() {

            const storageUser = await AsyncStorage.getItem('finToken');

            if (storageUser) {

                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })
                    .catch(() => {
                        setUser(null);
                    })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoading(false);

            }

            setLoading(false);

        }

        loadStorage();
    }, [])


    const singUp = async (nome, email, senha) => {
        try {
            setLoadingAuth(true);
            const response = await api.post("users", {
                nome: nome,
                email: email,
                senha: senha
            })

            setLoadingAuth(false);

        } catch (err) {
            console.log(err)
            setLoadingAuth(false);
        }
    }

    const singIn = async (email, password) => {
        try {
            setLoadingAuth(true);

            const response = await api.post("login", {
                email: email,
                password: password
            })

            const { id, name, token } = response.data;

            const data = {
                id,
                name,
                token,
                email
            }

            await AsyncStorage.setItem('finToken', token)

            api.defaults.headers["Authorization"] = `Bearer ${token}`

            setUser({
                id,
                name,
                email
            })

            setLoadingAuth(false)
        } catch (err) {
            console.log(err)
            setLoadingAuth(false);
        }
    }

    const signOut = async () => {
        await AsyncStorage.clear()
            .then(() => {
                setUser(null)
            })
    }

    return (
        <AppContext.Provider value={{ signed: !!user, user, singUp, signOut, loadingAuth, singIn, loading }}>
            {children}
        </AppContext.Provider>
    )
}
