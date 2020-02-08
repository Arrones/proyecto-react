import React, {Component} from 'react';
import {View, Text, Button, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Logo from './images/bmw1.jpg';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: () => {
      <Image style={{width: 30, height: 30}} source={Logo}></Image>;
    },
    title:'Autos de CR',
    headerStyle: {
      backgroundColor: '#094293',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
    },
  };
  
  async componentDidMount(){
    this.favorites = this._retrieveData().then(
      data => {
        this.setState({data});
      }
    )
  }

  render() {
    
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          color: 'black',
        }}>
          <FlatList
          numColumns={1}
          data={[
            {key: 'BMW', model:'320i', year:'2012', price:'8,000,000', uri: 'http://crautos.com/clasificados/usados/1530647-1.jpg'},
            {key: 'Toyota', model:'Fortuner', year:'2017', price:'23,000,000', uri:'http://crautos.com/clasificados/usados/9683791-1.jpg'},
            {key: 'Mini', model:'Cooper', year:'2019', price:'21,000,000', uri:'http://crautos.com/clasificados/usados/3511263-1.jpg'},
            {key: 'Audi', model:'A5', year:'2018', price:'24,500,000', uri:'http://crautos.com/clasificados/usados/48214533-2.jpg'},
            {key: 'Porsche', model:'Cayenne', year:'2019', price:'53,000,000', uri:'http://crautos.com/clasificados/usados/2973081-2.jpg'},
            {key: 'KIA', model:'Sorento', year:'2017', price:'18,000,000', uri:'http://crautos.com/clasificados/usados/9323672-1.jpg'},
            {key: 'Hyundai', model:'Elantra', year:'2017', price:'11,100,000', uri:'http://crautos.com/clasificados/usados/85240424-1.jpg'},
            {key: 'Land Rover', model:'Range Rover', year:'2014', price:'40,000,000', uri:'http://crautos.com/clasificados/usados/4594158-1.jpg'},
            {key: 'Suzuki', model:'Grand Vitara', year:'2018', price:'16,000,000', uri:'http://crautos.com/clasificados/usados/80102859-1.jpg'},
            {key: 'Honda', model:'CRV', year:'2013', price:'11,300,000', uri:'http://crautos.com/clasificados/usados/2880983-1.jpg'},
          ]}
          renderItem={({item}) => this.renderCar(item)}
          
        />
        <Button
          title="Favorites"
          onPress={() => this.props.navigation.navigate('Favorites', {favorites: this.state.data } )}></Button>
        <Button
          title="Menu"
          onPress={() => this.props.navigation.openDrawer()}></Button>
      </View>
    );
  }
 
  _retrieveData = async () => {
    try {
      const values = await AsyncStorage.getAllKeys();
      if (values !== null) {

        data=[
            {key: 'BMW', model:'320i', year:'2012', price:'8,000,000', uri: 'http://crautos.com/clasificados/usados/1530647-1.jpg'},
            {key: 'Toyota', model:'Fortuner', year:'2017', price:'23,000,000', uri:'http://crautos.com/clasificados/usados/9683791-1.jpg'},
            {key: 'Mini', model:'Cooper', year:'2019', price:'21,000,000', uri:'http://crautos.com/clasificados/usados/3511263-1.jpg'},
            {key: 'Audi', model:'A5', year:'2018', price:'24,500,000', uri:'http://crautos.com/clasificados/usados/48214533-2.jpg'},
            {key: 'Porsche', model:'Cayenne', year:'2019', price:'53,000,000', uri:'http://crautos.com/clasificados/usados/2973081-2.jpg'},
            {key: 'KIA', model:'Sorento', year:'2017', price:'18,000,000', uri:'http://crautos.com/clasificados/usados/9323672-1.jpg'},
            {key: 'Hyundai', model:'Elantra', year:'2017', price:'11,100,000', uri:'http://crautos.com/clasificados/usados/85240424-1.jpg'},
            {key: 'Land Rover', model:'Range Rover', year:'2014', price:'40,000,000', uri:'http://crautos.com/clasificados/usados/4594158-1.jpg'},
            {key: 'Suzuki', model:'Grand Vitara', year:'2018', price:'16,000,000', uri:'http://crautos.com/clasificados/usados/80102859-1.jpg'},
            {key: 'Honda', model:'CRV', year:'2013', price:'11,300,000', uri:'http://crautos.com/clasificados/usados/2880983-1.jpg'},
          ];
          favorites = data.filter(function(el){return ~values.indexOf(el.key)})
          console.log('Favo1', favorites);
        return favorites;
      }
    } catch (error) {
        console.log(error);
      // Error retrieving data
      return null;
    }
  };

  renderCar(item) {
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',{car: item})}>
          <View style={styles.container}>
              <View>
                <Image style={{width: 140, height: 100}} source={{uri: item.uri}}></Image>
              </View>
              <View>
                <Text> Marca: {item.key}</Text>
                <Text> Año: {item.year}</Text>
                <Text> Precio: {item.price}</Text>
              </View>
            </View>
                
        </TouchableOpacity>

    )
  };

}



export default HomeScreen;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   flexWrap: 'wrap',
   alignItems: 'flex-start' 
  },
  item: {
  
  },
  
})