import React, { FC } from 'react';
import { ContainerHeader, TitleHeader, ButtonHeader } from '../Theme/themeComponents';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export interface HeaderProps {
    title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {

    const navigation = useNavigation()

    return (
        <ContainerHeader>
            <ButtonHeader onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
                <MaterialIcons name="menu" size={30} color="black" />
            </ButtonHeader>
            {title &&
                <TitleHeader>{title}</TitleHeader>
            }
        </ContainerHeader>
    )
}

