import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import rectangle from '../assets/images/Rectangle1.png'
import { MonoText } from '../components/StyledText';

export default function CreatePlaygroundScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1}}>
      <Text>      </Text>
        <Text>      </Text>
          <View>
            <Text style={styles.title}>Create a Playground</Text>
          </View>
          <Text> </Text> 
          <Text style={styles.titleDescription}> Playgrounds are the easiest way for 
          you and your friend groups to stay in touch, view your availabilities, and make plans seamlessly.</Text>
        <Text> </Text>    
         <Image style={styles.colorPicker} source={rectangle}/> 
         <TextInput style={styles.input} placeholderTextColor="gray"> </TextInput> 
      </ScrollView>

    </View>
  );
}

CreatePlaygroundScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F8',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 34,
    color:'#72738E',
    letterSpacing: -0.91,
    textAlign: 'center',
  },
  titleDescription: {
    fontFamily: 'Helvetica',
    fontSize: 13,
    color: '#808196',
    letterSpacing: -0.52,
    textAlign: 'center',
    lineHeight: 17,
  },
  colorPicker: {
    backgroundColor: '#F8F8FB',
    borderRadius: 10.5,
    width: 245, 
    height: 245,
    alignSelf: 'center',
  },
  input: {
    borderColor: '#9899BE',
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    margin: 30,
  },
  scrollView: {
    flex: .2
  },
});
