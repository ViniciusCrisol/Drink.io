import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';
import styles from './styles';

export default class Drinks extends Component {
  state = {
    drinks: [],
  };

  handleNavigate = (drink) => {
    const { navigation } = this.props;

    navigation.navigate('Description', { drink });
  };

  handleNavigateHome = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const list = navigation.getParam('list');

    const response = await api.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${list}`
    );

    this.setState({ drinks: response.data });
  }

  render() {
    const { drinks } = this.state.drinks;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => this.handleNavigateHome()}
          >
            <Text style={styles.buttonBackText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={2}
          data={drinks}
          keyExtractor={(drink) => String(drink.idDrink)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.handleNavigate(item)}
              style={styles.flatListContainer}
            >
              <Image
                style={styles.flatListContainerImage}
                source={{ uri: item.strDrinkThumb }}
              />
              <Text style={styles.flatListContainerText}>{item.strDrink}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
