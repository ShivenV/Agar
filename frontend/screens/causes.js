import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, ImageBackground, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
// Navigation

import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import {COLORS} from './constants.js'

const Stack = createStackNavigator();


function renderEmergencies() {
    return(
        <View style={{marginTop: 15}}>
        <TouchableOpacity>
        <View style={{}}>
            <View style={{alignItems: 'center', borderRadius: 15, overflow: 'hidden', marginBottom: 10}}>
            <Image
                        style={{width: Dimensions.get('window').width-40, height: 170, borderRadius: 15}}
                        source={require('./images/explosion.jpg')}
            />
            </View>
            <View style={{alignItems: 'flex-start', marginLeft: 25}}>
            <Text style={{fontSize: 20, fontFamily: 'VisbyRB'}}>Beirut Explosion Relief</Text>
            </View>
            
            <View style={{flexDirection: 'row'}}>
            <View style={{width: 270, marginLeft: 25, marginTop: 5}}>
                <Text style={{fontFamily: 'VisbyRB', color: COLORS.darkPurple}}>$10,000/$200,000 Goal</Text>
            </View>
            <View style={{marginTop: 5}}>
                <Text style={{fontFamily: 'VisbyRB', color: COLORS.grey}}>2 Days Left</Text>
            </View>
            
            </View>
            
        </View>
        </TouchableOpacity>
        
        </View>
    );
}

function Causes() {
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: COLORS.white, marginTop: StatusBar.currentHeight+10,}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: COLORS.white}} keyboardShouldPersistTaps='handled'>
            <Text>screen 2</Text>



        </ScrollView>
    </SafeAreaView>
  );
}

export default Causes;