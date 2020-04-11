import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import pic from '../assets/images/pic.png'
import jada from '../assets/images/JadaG.png'
import jav from '../assets/images/JavierB.png'
import selena from '../assets/images/SelenaY.png'
import sarah from '../assets/images/SarahA.png'
import group from '../assets/images/Group12.png'
import group3 from '../assets/images/Group3.png'
import rectangle from '../assets/images/Rectangle.png'
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1}}>
      <Text>      </Text>
        <View style={styles.welcomeView}>
        <Text>      </Text>
          <View>
            <Text style={styles.welcomeText}>Welcome Back,</Text>
            <Text style={styles.welcomeName}>Rachel</Text>
          </View>
          <Text>                        </Text>
          <Image source={pic} style={{ width: 140, height: 140 }}/>
        </View>
        <View style={styles.availableNow}>
          <Text style={styles.availableText}>     AVAILABLE NOW</Text>
          <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text>    </Text>
            <View>
              <Image source={jada} style={{ width: 120, height: 120 }}/>
              <Text style={styles.nameText}>          Jada G.</Text>
            </View>
            <View>
              <Image source={jav} style={{ width: 120, height: 120 }}/>
              <Text style={styles.nameText}>           Javier B.</Text>
            </View>
            <View>
              <Image source={selena} style={{ width: 120, height: 120 }}/>
              <Text style={styles.nameText}>          Selena Y.</Text>
            </View>
            <View>
              <Image source={sarah} style={{ width: 120, height: 120 }}/>
              <Text style={styles.nameText}>          Sarah A.</Text>
            </View>
            <View>
              <Image source={jada} style={{ width: 120, height: 120 }}/>
              <Text style={styles.nameText}>          Sarah A.</Text>
            </View>
          </ScrollView>
        </View>
        <Text> </Text>
      <View style={styles.availableNow}>
      <Text style={styles.availableText}>    SUGGESTED EVENTS</Text>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text>    </Text>
            <View>
              <Image source={group} style={{ width: 343, height: 144 }}/>
            </View>
            <View>
              <Image source={group} style={{ width: 343, height: 144 }}/>
            </View>
          </ScrollView>
      </View>
      <Text> </Text>
      <View style={styles.availableNow}>
          <Text style={styles.availableText}>     PLAYGROUNGS</Text>
          <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text>     </Text>
            <View>
              <Image source={group3} style={{ width: 83, height: 112 }}/>
            </View>
            <Text>  </Text>
            <View>
              <Image source={group3} style={{ width: 83, height: 112 }}/>
            </View>
            <Text>  </Text><View>
              <Image source={group3} style={{ width: 83, height: 112 }}/>
            </View>
            <Text>  </Text><View>
              <Image source={group3} style={{ width: 83, height: 112 }}/>
            </View>
            <Text>  </Text><View>
              <Image source={group3} style={{ width: 83, height: 112 }}/>
            </View>
            <Text>  </Text><View>
              <Image source={group3} style={{ width: 83, height: 112 }}/>
            </View>
            <Text>  </Text>
            
          </ScrollView>
        </View>
        
        
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F8',
  },
  welcomeView: {
    flex: .15,
    flexDirection: 'row',
  },
  suggestedView: {
    flex: .1,
  },
  suggestedViewScroll: {
    flex: .1,
  },
  playDatesView: {
    flex: .12,
  },
  welcomeText: {
    flex: .1,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 26.72,
    color: '#72738E',
  },
  welcomeName: {
    flex: .5,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 39.72,
    lineHeight: 45,
    color: '#72738E',
  },
  availableNow: {
    flex: .25,
  },
  availableText: {
    flex: .2,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 19,
    color: '#72738E',
  },
  nameText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    color: '#72738E',
  },
  scrollView: {
    flex: .2
  },
});
