import {Dimensions, Platform} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const isIos = Platform.OS === 'ios';

export const statusBarHeight = getStatusBarHeight();

export const wp = val => widthPercentageToDP((val * 100) / 375);
export const hp = val => heightPercentageToDP((val * 100) / 812);
export const fontSize = val => RFValue(val, 812);

export const {height, width} = Dimensions.get('window');

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~]).{8,}$/;
