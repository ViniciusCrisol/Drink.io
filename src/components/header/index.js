import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

import panelBG from '../../assets/PanelBG.jpg';

export default function Header({ PageName }) {
  return (
    <View style={styles.container}>
      <Image source={panelBG} style={styles.image} />
      <Text style={styles.title}>{PageName}.io</Text>
    </View>
  );
}
