import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usando API do Star Wars</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetail}>{item.model}</Text>
            <Text style={styles.itemDetail}>{item.manufacturer}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EAF6', // Um tom de violeta claro para o fundo
  },
  titulo: {
    fontSize: 40,
    color: '#4A148C', // Violeta escuro
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#4CAF50', // Verde
    borderRadius: 10,
    margin: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%', // Ajusta a largura do item
  },
  itemName: {
    fontSize: 20,
    color: '#FFFFFF', // Branco para o texto do nome
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetail: {
    fontSize: 16,
    color: '#FFFFFF', // Branco para o texto dos detalhes
  },
});
