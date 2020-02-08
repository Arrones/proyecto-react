import React, {Component} from 'react';
import {View, Text, Button, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';



class FavoritesScreen extends Component {
  static navigationOptions = {
    title:'Favoritos',
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
    const item = this.props.navigation.getParam('favorites', 'N/A');
    console.log('item favo', item);
    return (
            
        <View
            style={{
            flex: 1,
            backgroundColor: 'white',
            color: 'black',
            }}>
            <FlatList
          numColumns={1}
          data={item}
          renderItem={({item}) => this.renderCar(item)}
          
        />
            
        </View>
        );
  }
/**
 * 
 * {<FlatList
    numColumns={1}
    data={this.state.fav}
    renderItem={({item}) => this.renderCar(item)}
    
/>} item 
 */

  renderCar(item) {
      console.log('item',item);
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


export default FavoritesScreen;

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