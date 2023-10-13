import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/Routes/MainStack';
import { AuthProvider } from './src/Context/AppContext';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="dark-content" backgroundColor='#f0f4ff' />
        <MainStack />
      </AuthProvider>
    </NavigationContainer>
  );
}


