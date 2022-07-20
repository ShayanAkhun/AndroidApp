import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import {sliderData} from '../components/data';
import BannderSlider from '../components/BannerSlider';
import {windowWidth} from '../components/utlis/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import {freeGames} from '../components/data';
import {paidGames} from '../components/data';

export default function DashBoard({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);
  const renderBanner = ({item, index}) => {
    return <BannderSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: 20}}>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 16, fontFamily: 'Poppins-Bold'}}>
            Hello Shayan Ghori
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assests/user1.png')}
              style={{width: 25, height: 25}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',

            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Icon
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginBottom: 7}}
          />
          <TextInput
            style={{fontFamily: 'Poppins-Bold', flex: 1, alignItems: 'center'}}
            placeholder="Search"
          />
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Poppins-Bold'}}>
            Upcomming Products
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Bold',
                color: '#0aada8',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <Carousel
          // ref={c => {
          //   this._carousel = c;
          // }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Free Products"
            option2="Premium Products"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
