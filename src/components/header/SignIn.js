import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SignUp = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [passwordText, onChangeNumber] = React.useState(null);
  const [iD, oniDChange] = React.useState(null);
    return (
    <View style={styles.HeaderView}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/razer_hexagons.png')}
        style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.innnerTextView}>
          <Text style={styles.headertext}>RazerID</Text>
          <Text style={styles.headertext1}>ENGLISH </Text>
          <Text style={styles.headertext}>FAQ</Text>
        </View>
        <View>
          <View style={styles.formData}>
            <Text style={styles.FormHeadingText}>Create RazerID Account</Text>
            <TextInput
              style={styles.input}
              onChangeText={oniDChange}
              placeholder="RAZER ID"
              value={iD}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="EMAIL ADDRESS"
              value={text}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.inputPassword}
              onChangeNumber={onChangeNumber}
              value={passwordText}
              placeholder="PASSWORD"
              placeholderTextColor="white"
            />
            <TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInBtntext}>
              <Text style={styles.innerBtntext}> START</Text>
            </TouchableOpacity>
            <Text style={styles.connectText}>
              ----------Or connect with----------
            </Text>
            <View style={styles.icons}>
              <Icon name="md-logo-facebook" size={30} />
              <Icon name="logo-google" size={30} />
              <Icon name="md-logo-twitch" size={30} />
            </View>
            <TouchableOpacity>
              <Text style={styles.registerButton} onPress={() => navigation.navigate('LogIn')}
              >ALREADY HAVE AN ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    flex: 1,
  },
  headertext: {
    color: 'white',
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    padding: 2,
  },
  headertext1: {
    color: 'white',
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    marginLeft: 220,
    padding: 2,
  },

  innnerTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FormHeadingText: {
    color: 'white',
    fontFamily: 'Poppins-BoldItalic',
    marginLeft: 20,
  },
  input: {
    color: 'white',
    fontFamily: 'Poppins-ExtraLight',
    borderRadius: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 9,
  },
  inputPassword: {
    color: 'white',
    fontFamily: 'Poppins-ExtraLight',
    borderRadius: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 9,
  },
  formData: {
    backgroundColor: '#222',
    padding: 32,
    margin: 11,
  },
  forgotPassowrdInput: {
    color: 'white',
    fontFamily: 'Poppins-ExtraLight',
    marginLeft: 170,
    fontSize: 9,
    textDecorationLine: 'underline',
  },
  innerBtntext: {
    color: '#222',
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    borderColor: 'white',
  },
  signInBtntext: {
    padding: 6,
    borderRadius: 1,
    backgroundColor: 'green',
    marginTop: 10,
  },
  connectText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Poppins-Thin',
    fontSize: 9,
    marginTop: 5,
  },
  icons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  registerButton: {
    fontFamily: 'Poppins-ExtraLight',
    borderRadius: 5,
    color: 'white',
    padding: 6,
    borderRadius: 1,
    alignSelf: 'center',
    marginTop: 15,
    borderColor: '#eeeee4',
  },
});
