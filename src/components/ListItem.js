import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function ListItem({photo, title, subtitle, price}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={photo}
          style={{
            width: 55,
            height: 55,
            borderRadius: 10,
            marginRight: 8,
          }}></Image>
        <View>
          <Text style={{fontFamily: 'Poppins-Light', fontSize: 10}}>
            {title}
          </Text>
          <Text style={{fontFamily: 'Poppins-Light', fontSize: 8}}>
            {subtitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#2c5825',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fonstSize: 8,
            fontFamily: 'Poppins-Light',
            textAlign: 'center',
            color: '#fff',
          }}>
            {price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
