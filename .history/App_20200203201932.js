import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  H1,
} from 'react-native';

export default class EventList extends Component {
  state = {
    libros: []
  }

  componentDidMount() {
    const libros = require('./db.json').libros
    this.setState( { libros })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Libros Ecuatorianos</Text>
      <FlatList
        data={ this.state.libros }
        style={ styles.lista }
        renderItem={ ({ item }) => 
          <View style={styles.container}>
            <Text>Nombre del libro: { item.nombre }</Text>
            <Text>Autor: { item.autor }</Text>
          </View>
        }
        keyExtractor={ item => item.id }
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    paddingTop: 20,
  },
  titulo:{
    paddingTop: 150,
    fontSize: 30
  }
});
