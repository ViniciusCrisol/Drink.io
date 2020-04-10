import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default class Description extends Component {
  state = {
    drinks: [],
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const drink = navigation.getParam('drink');

    const response = await api.get(`/lookup.php?i=${drink.idDrink}`);

    this.setState({ drinks: response.data });
  }
  render() {
    const { navigation } = this.props;
    const drink = navigation.getParam('drink');

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => this.handleNavigate()}
          >
            <Text style={styles.buttonBackText}>Voltar</Text>
          </TouchableOpacity>
          <Image
            style={styles.thumb}
            source={{
              uri: drink.strDrinkThumb,
            }}
          />
          <Text style={styles.name}>{drink.strDrink}</Text>

          <Text style={styles.descriptionText}>Description:</Text>
        </View>
      </>
    );
  }
}
