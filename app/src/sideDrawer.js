import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';

import Logo from './images/logoApple.png';
const SideMenu = props => {
  navigateToScreen = route => {
    const navigateAction = NavigationActions.navigate({routeName: route});
    props.navigation.dispatch(navigateAction);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.navImageContainer}>
            <Image style={{width: 50, height: 50}} source={Logo}></Image>
          </View>
        </View>
        <Text style={styles.sectionsHeadingStyle}>Section 1</Text>
        <View style={styles.navSectionStyle}>
          <Text
            style={styles.navItemStyle}
            onPress={() => this.navigateToScreen('Home')}>
            Home
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={() => this.navigateToScreen('Detail')}>
            Detail
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={() => this.navigateToScreen('User')}>
            Contact
          </Text>
          <Text
            style={styles.navItemStyle}
            onPress={() => this.navigateToScreen('User')}>
            Uploads
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text>Copyrigth@</Text>
        </View>
      </ScrollView>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  navImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  sectionsHeadingStyle: {
    color: '#fff',
    backgroundColor: '#04b6ff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navSectionStyle: {
    backgroundColor: 'black',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
});

export default SideMenu;
