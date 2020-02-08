import React from 'react';

import {View, Button, Text} from 'react-native';

const SettingsComponent = props => (
  <View>
    <Text>Iam the setting screen</Text>
    <Button
      title="Go To Users in the Settings"
      onPress={() => props.navigation.navigate('Home')}></Button>
  </View>
);

export default SettingsComponent;
