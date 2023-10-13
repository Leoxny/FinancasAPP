import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #171717;
`;

export const BackgroundHome = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff
`

export const ContainerHeader = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-height: 60px
`
export const TitleHeader = styled.Text`
  font-size: 22px;
  margin-left: 8px;
`

export const ButtonHeader = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`
export const ListBalance = styled.FlatList`
  max-height: 190px;
`
export const ContainerCard = styled.View`
  background-color: #${props => props.bg};
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start; 
  width: 300px;
  padding-left: 14px;
`;
export const LabelCard = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`
export const BalanceCard = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #fff;
`
export const ViewRegister = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`
export const InputMovimentos = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #fff;
  font-size: 17px; 
  padding: 0 8px;
  margin-bottom: 14px;
  border-radius: 4px;
`;

export const SubmitButtonMoviments = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 4px;
`
export const SubmitTextMoviments = styled.Text`
  color: #fff;
  font-size: 21px;
  font-weight: bold;
`

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  background-color: ${props => props.checked ? '#fff' : '#e7e7e7'};  
  width: 47%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;  
  border-color: ${props => props.checked ? '#3b3dbf' : 'transparent'};
  margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 17px;
`;

export const Area = styled.View`
  background-color: #FFf;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  align-items: baseline;
  margin-top: 22px;
  padding-top: 14px;
`

export const TitleHome = styled.Text`
  margin-left: 4px;
  color: #121212;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
`

export const ListHome = styled.FlatList`
  flex: 1;
  background-color: #FFf;
`

export const ContainerList = styled.View`
  background-color: #F0F3FF;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`

export const TipoText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: italic;
`

export const Tipo = styled.View`
  flex-direction: row;
`

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
`

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 2px;
`

export const ContainerProfile = styled.View`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
`

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px
`

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  color: #121212
`

export const NewLink = styled.TouchableOpacity`
  background-color: #3b3dbf;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center; 
  justify-content: center;
  margin-bottom: 14px;
`

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff
`

export const LogoutButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #c62c36
`

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #c62c36;
`

export const ContainerModal = styled.View`
  flex: 1;
  background-color: rgba(34,34,34, 0.4);
`

export const BUttonFilterText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`

export const ModalContent = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #fff;
  padding: 14px;
`

export const ButtonFilter =styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #3b3dbf;
  height: 45px;
  align-items: center;
  justify-content: center;
`
