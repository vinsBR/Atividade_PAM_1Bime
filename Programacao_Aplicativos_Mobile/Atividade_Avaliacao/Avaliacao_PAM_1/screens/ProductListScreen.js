import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const produto = [
  { id: '1', nome: 'Anel', preco: 'R$ 185,00', descricao: 'Aquele brilho para uma pessoa amada' },
  { id: '2', nome: 'Relógio', preco: 'R$ 310,00', descricao: 'Relógio à prova d\'água' },
  { id: '3', nome: 'Tênis', preco: 'R$ 230,00', descricao: 'Tênis confortável para caminhada' },
  { id: '4', nome: 'Moletom', preco: 'R$ 450,00', descricao: 'Moletom 100% algodão' },
  { id: '5', nome: 'Bola de futebol Adidas', preco: 'R$ 130,00', descricao: 'A bola da melhor qualidade' }
];

export default function ProductListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={produto}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ProductDetail', { produto: item })}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.preco}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 12, borderBottomWidth: 1, borderColor: '#ccc' },
  nome: { fontWeight: 'bold' },
});
