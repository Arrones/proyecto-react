import React from 'react';
import {Image} from 'react-native';

import Logo from './images/logoApple.png';

const LogoTitle = () => (
  <Image source={Logo} style={{width: 30, height: 30}}></Image>
);

export default LogoTitle;
