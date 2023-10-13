import React, { useContext, useState, useEffect } from 'react'
import { TouchableOpacity, TouchableNativeFeedback, Alert, Modal } from 'react-native'
import { AppContext } from '../../Context/AppContext'
import { BackgroundHome, ContainerCard, LabelCard, ListBalance, BalanceCard, Area, ListHome, TitleHome, TipoText, ContainerList, Tipo, ValorText, IconView } from '../../Theme/themeComponents';
import { Header } from '../../components/header';
import { api } from '../../config/config';
import { format, setDate } from 'date-fns'
import { useIsFocused } from '@react-navigation/native';
import { colors } from '../../Theme/themeColor';
import { formatMoneyNey } from '../../utils/utils';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { CalendarModal } from '../../components/CalendarModal';

export const HomeScreen = () => {

    const { signOut, user } = useContext(AppContext)
    const [listBalance, setListBalance] = useState([])
    const [dateMovemetns, setDateMovemetns] = useState(new Date())
    const [loading, setLoading] = useState(false)
    const isFocused = useIsFocused()
    const [listReceives, setListReceives] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (isFocused) {
            getMovemnst();
            getReceives();
        }
    }, [isFocused, dateMovemetns])

    const getMovemnst = async () => {
        try {

            setLoading(true)

            let isActive = true
            let date = new Date(dateMovemetns)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormated = format(onlyDate, 'dd/MM/yyyy')

            const response = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            console.log('response', response.data)

            if (isActive) {
                setListBalance(response.data)
            }

            setLoading(false)

            return () => isActive = false

        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    const getReceives = async () => {
        try {
            setLoading(true)

            let dateformated = format(dateMovemetns, 'dd/MM/yyyy')

            const response = await api.get('/receives', {
                params: {
                    date: dateformated
                }
            })

            setListReceives(response.data)

            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    const handleDeleteItem = (id) => {
        Alert.alert(
            'Atençao',
            'Você tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(id)
                }
            ]
        )
    }

    const deleteItem = async (id) => {
        try {

            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMovemetns(new Date())

        } catch (err) {
            console.log('ERRO NO DELETE', err)
        }
    }

    const renderCard = ({ item }) => {

        // console.log('ITEM', item)

        let labelName = item.tag == 'saldo' ? 'Saldo atual' : (item.tag == 'receita' ? 'Entradas de hoje' : 'Saidas de hoje')
        let cardColor = item.tag == 'saldo' ? colors.backgroundColorSaldo : (item.tag == 'receita' ? colors.backgroundColorReceita : colors.backgroundColorDespesa)
        let saldo = item.tag == 'saldo' ? `${formatMoneyNey(item.saldo)}` : (item.tag == 'receita' ? `+ ${formatMoneyNey(item.saldo)}` : `- ${formatMoneyNey(item.saldo)}`)

        return (
            <ContainerCard style={{ backgroundColor: cardColor }}>
                <LabelCard> {labelName} </LabelCard>
                <BalanceCard>{(saldo)}</BalanceCard>
            </ContainerCard>
        )
    }

    const renderList = ({ item }) => {

        return (
            <TouchableNativeFeedback onLongPress={() => handleDeleteItem(item.id)}>
                <ContainerList>
                    <Tipo>
                        <IconView tipo={item.type}>
                            <Feather name={item.type === 'despesa' ? 'arrow-down' : 'arrow-up'} size={20} color={'#fff'} />
                            <TipoText>{item.type}</TipoText>
                        </IconView>
                    </Tipo>

                    <ValorText>{formatMoneyNey(item.value)}</ValorText>

                </ContainerList>
            </TouchableNativeFeedback>
        )
    }

    const filterDateMovents = (dateSelect) => {
        setDateMovemetns(dateSelect)
    }

    return (
        <BackgroundHome>
            <Header title="Minhas movimentações" />

            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={item => item.tag}
                renderItem={renderCard}
            />

            <Area>
                <TouchableOpacity style={{ top: 8 }} onPress={() => setModalVisible(true)}>
                    <MaterialIcons name="event" size={30} color="#121212" />
                </TouchableOpacity>
                <TitleHome>Ultimas movimentações</TitleHome>
            </Area>

            <ListHome
                data={listReceives}
                keyExtractor={item => item.id}
                renderItem={renderList}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            <Modal visible={modalVisible} transparent={true} animationType='fade' >
                <CalendarModal setVisible={() => setModalVisible(false)} handleFilter={filterDateMovents} />
            </Modal>

        </BackgroundHome>
    )
}

