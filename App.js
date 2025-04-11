import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Programacao_Aplicativos_Mobile/Atividade_Avaliacao/Avaliacao_PAM_1/screens/HomeScreen';
import ProductListScreen from './Programacao_Aplicativos_Mobile/Atividade_Avaliacao/Avaliacao_PAM_1/screens/ProductListScreen';
import ProductDetailScreen from './Programacao_Aplicativos_Mobile/Atividade_Avaliacao/Avaliacao_PAM_1/screens/ProductDetailScreen';
import InfoScreen from './Programacao_Aplicativos_Mobile/Atividade_Avaliacao/Avaliacao_PAM_1/screens/InfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Produtos' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalhes do Produto' }} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'Informações' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


