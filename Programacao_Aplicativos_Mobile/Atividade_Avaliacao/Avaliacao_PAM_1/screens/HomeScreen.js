import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Catálogo de Produtos!</Text>
      <Button title="Ver Produtos" onPress={() => navigation.navigate('ProductList')} />
      <Button title="Informações Sobre" onPress={() => navigation.navigate('Info')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  title: { fontSize: 20, marginBottom: 20 },
});
