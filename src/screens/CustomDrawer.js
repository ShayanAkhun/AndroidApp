import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <ImageBackground
          source={require('../assests/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../assests/user1.png')}
            style={{height: 60, width: 60, borderRadius: 50}}></Image>
          <Text
            style={{color: 'white', fontSize: 18, fontFamily: 'Poppins-Light'}}>
            Shayan Ghori
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Poppins-Light',
                marginRight: 5,
              }}>
              300
            </Text>
            <Icon name="coins" size={20} color="white" />
          </View>
        </ImageBackground>
        <View style={{padding: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
          <View style={{flexDirection:'row' , alignItems: 'center'}}>
            <Ionicons name="share-social" size={20} />
            <Text style={{fontFamily: 'Poppins-Light', fontSize: 13, marginLeft: 5}}>
                Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
          <View style={{flexDirection:'row' , alignItems: 'center'}}>
            <Octicons name="sign-out" size={20} />
            <Text style={{fontFamily: 'Poppins-Light', fontSize: 13, marginLeft: 5}}>
                  Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
