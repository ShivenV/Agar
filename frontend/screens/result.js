import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, ImageBackground, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
// Navigation

import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import {COLORS} from './constants.js'

const Stack = createStackNavigator();


function renderHeader() {
  return(
  <View style={{marginTop: StatusBar.currentHeight+10, elevation: 10, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
      <View style={{flexDirection: 'row', backgroundColor: COLORS.white, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, paddingBottom: 10 }}>
      <View style={{width:290, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
          <Text style={{fontSize: 20, fontFamily: 'VisbyRB', color: COLORS.salmon}}>Hello,</Text>
          <Text style={{fontSize: 30, fontFamily: 'VisbyRB'}}>Obama</Text>
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'flex-end', marginTop: 20}}>
          <View style={{paddingLeft: 25}}>
              <TouchableOpacity>
                  <Feather name="user" size={35} color={COLORS.salmon} />
              </TouchableOpacity>
              
          </View>
      </View>
  </View>
  </View>

  
  );
}

function Result({navigation}) {
const name =  this.props.navigation.getParam('name', 'nothing sent')
const result =  this.props.navigation.getParam('result', 'nothing sent')
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      {renderHeader()}
      <TouchableOpacity style={{alignItems: 'center', backgroundColor:COLORS.white, borderRadius: 20, flexDirection: 'row', elevation: 10, marginTop: 25, marginHorizontal: 20, marginBottom: 15, padding: 25}}>
                        
          <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontFamily: 'VisbyRB', lineHeight: 25}}>{name}</Text>
              <Text style={{fontSize: 15, fontFamily: 'VisbyRegular', lineHeight: 25}}>{Result}</Text>
              
    
          </View>
          <View style={{alignItems: 'center'}}>
          <Feather name="camera" size={70} color={COLORS.coral} />
          </View>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{alignItems: 'center', backgroundColor:COLORS.white, borderRadius: 20, flexDirection: 'row', elevation: 10, marginTop: 25, marginHorizontal: 20, marginBottom: 15, padding: 25}}
      onPress={() => navigation.navigate('Details')}
      >
                        
          <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontFamily: 'VisbyRB', lineHeight: 25}}>{name}</Text>
              <Text style={{fontSize: 15, fontFamily: 'VisbyRegular', lineHeight: 25}}>{result}</Text>
              
    
          </View>
          <View style={{alignItems: 'center'}}>
          <Feather name="arrow-right" size={70} color={COLORS.coral} />
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center', backgroundColor:COLORS.white, borderRadius: 20, flexDirection: 'row', elevation: 10, marginTop: 25, marginHorizontal: 20, marginBottom: 15, padding: 25}}>
                        
          <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontFamily: 'VisbyRB', lineHeight: 25}}>Coming soon...</Text>
              <Text style={{fontSize: 15, fontFamily: 'VisbyRegular', lineHeight: 25}}>Please Wait</Text>
              
    
          </View>
          <View style={{alignItems: 'center'}}>
          <Feather name="hard-drive" size={70} color={COLORS.coral} />
          </View>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

export default Result;