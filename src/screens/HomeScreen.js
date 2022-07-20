import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DashBoard from '../screens/DashBoard';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assests/Leviathan.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image
          source={require('../assests/razer-text.png')}
          style={styles.headerImage}
        />

        <TouchableOpacity
        
          style={styles.signInBtntext}
          onPress={() => navigation.navigate('DashBoard')}>
          <Text style={styles.innerBtntext}>Let's Begin</Text>
           <Icon name="arrow-forward" size={30} />
        </TouchableOpacity>

        <Image
          style={styles.tinyLogo}
          source={require('../assests/razer-logo-text.png')}
          resizeMode="cover"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    color: 'gray',
    borderRadius: 20,
    backgroundColor: 'gray',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    padding: 11 ,
    width: '40%',
    height: 18,
    alignSelf: 'center',
    marginTop: 490,
  },
  signInBtntext: {
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
    alignSelf: 'center',
    borderRadius: 3,
    width: '75%',
    backgroundColor: 'green',
    bottom: -330,
  },
  innerBtntext: {

    alignSelf: 'center',
    marginLeft: '35%',
    fontFamily: 'Poppins-Medium',
    color: '#222',
  },
  headerImage: {
    width: 250,
    height: 13,
    alignSelf: 'center',

  }
});
