import React, { Component } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class DetailScreen extends Component {
  static navigationOptions = {
    title:'Detalles del auto',
    headerStyle: {
      backgroundColor: '#094293',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
    },
  };

  render() {
    const item = this.props.navigation.getParam('car', 'N/A');
    return (
      <View>
        <Image style={{width: 400, height: 250}} source={{uri: item.uri}}></Image>
        <Text> Marca: {item.key}</Text>
        <Text> Año: {item.year}</Text>
        <Text> Precio: {item.price}</Text>
        <Text> Cilindrada: {item.key}</Text>
        <Text> Estilo: {item.year}</Text>
        <Text> Estado: {item.price}</Text>
        <Text> Placa: {item.key}</Text>
        <Text> Transmisión: {item.year}</Text>
        <Button
          title="Añadir a favoritos"
          onPress={() => this._storeData(item)}></Button>
      </View>
    );
  }
  _storeData = async (item) => {
    try {
      await AsyncStorage.setItem(item.key, item.year);
      Alert.alert(
        'Añadido con éxito',
        'Este vehículo ha sido añadido con éxito a su lista de favoritos',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    } catch (error) {
      // Error saving data
      Alert.alert(
        'Error',
        'Error salvando su favorito',
        [
          {text: 'OK', onPress: () => console.log(error)},
        ],
        {cancelable: false},
      );
    }
  };

}

export default DetailScreen;
