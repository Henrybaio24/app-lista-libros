import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
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
      <FlatList
        data={ this.state.libros }
        style={ styles.list }
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
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F3F3F3'
  },
});
