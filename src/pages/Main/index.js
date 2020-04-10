import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import api from '../../services/api';
import Header from '../../components/header/index';

export default class Main extends Component {
  state = {
    drinks: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await api.get('/filter.php?c=Ordinary_Drink');

    this.setState({
      drinks: response.data,
      loading: false,
    });
  }

  handleNavigate = (drink) => {
    const { navigation } = this.props;

    navigation.navigate('Description', { drink });
  };

  handleNavigateCategory = (param) => {
    const { navigation } = this.props;
    const list = param;
    navigation.navigate('Drinks', { list });
  };

  render() {
    const { drinks } = this.state.drinks;
    const { loading } = this.state;

    return (
      <>
        <Header PageName="Drinks" />

        <View style={styles.container}>
          <Text style={styles.title}>Categorias</Text>
          <View style={styles.form}>
            <TouchableOpacity
              onPress={() => this.handleNavigateCategory('Alcoholic')}
            >
              <Text style={styles.categoryTag}>Alcoólicos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handleNavigateCategory('Non_Alcoholic')}
            >
              <Text style={styles.categoryTag}>Não-Alcoólicos</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Explorar</Text>

          <FlatList
            horizontal
            data={drinks}
            keyExtractor={(drink) => String(drink.idDrink)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.handleNavigate(item)}
                style={styles.flatListContainer}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <>
                    <Image
                      style={styles.flatListContainerImage}
                      source={{ uri: item.strDrinkThumb }}
                    />
                    <Text style={styles.flatListContainerText}>
                      {item.strDrink}
                    </Text>
                  </>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </>
    );
  }
}
