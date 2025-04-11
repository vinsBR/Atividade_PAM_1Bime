import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  nome: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  preco: { fontSize: 18, color: 'green', marginBottom: 10 },
  descricao: { fontSize: 16 },
});
