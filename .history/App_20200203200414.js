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
      <H1></H1>
      <FlatList
        data={ this.state.libros }
        style={ styles.lista }
        renderItem={ ({ item }) => 
          <View style={styles.container}>
            <Text>{ item.nombre }</Text>
          </View>
        }
        keyExtractor={ item => item.id }
      />
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
    paddingTop: 250,
  },
});
