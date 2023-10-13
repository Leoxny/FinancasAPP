import React, { useState, FC } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { BUttonFilterText, ContainerModal, ModalContent, ButtonFilter } from '../Theme/themeComponents';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

export interface CalendarModalProps {
    setVisible: () => void
    handleFilter: (date: Date) => void
}

LocaleConfig.locales['pt-BR'] = ptBR;
LocaleConfig.defaultLocale = 'pt-BR';

export const CalendarModal: FC<CalendarModalProps> = ({ setVisible, handleFilter }) => {

    const [dateNow, setDateNow] = useState(new Date())
    const [markedDates, setMarkedDates] = useState({})

    const handleOnDayPress = (date) => {
        setDateNow(new Date(date.dateString))

        let markeDay = {}

        markeDay[date.dateString] = {
            selected: true,
            selectdColor: '#3b3dbf',
            textColor: '#fff'
        }

        setMarkedDates(markeDay)
    }

    const handleFilterDate = () => {
        handleFilter(dateNow)
        setVisible();
    }

    return (
        <ContainerModal>
            <TouchableNativeFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}></View>
            </TouchableNativeFeedback>

            <ModalContent>
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayBackgroundColor: '#ff0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#fff'
                    }}
                />
                <ButtonFilter onPress={handleFilterDate}>
                    <BUttonFilterText>Filtrar</BUttonFilterText>
                </ButtonFilter>
            </ModalContent>
        </ContainerModal>
    );
}