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
    <View style={{elevation: 10, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
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

function renderSelection() {
    return(
        <View>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <View style={{width:290, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
                <Text style={{fontSize: 20, fontFamily: 'VisbyRB', color: COLORS.black}}>Ways to Help</Text>

            </View>
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                <View style={{paddingTop:2, paddingLeft: 25}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, fontFamily: 'VisbyRB', color: COLORS.salmon}}>See All</Text>
                    </TouchableOpacity>  
                </View>
            </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly'}}>
            <View style={{marginTop: 10, marginLeft: 1}}>      
                <TouchableOpacity
                    style={{
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: COLORS.lightLightPurple,
                    padding: 10,
                    }}
                >
                

                    <Feather name='award' size={28} color={COLORS.lightPurple}/>
                    <Text style={{fontSize: 12, color: COLORS.black, fontFamily: 'VisbyRB', marginTop: 5}}>Challenges</Text>
                    
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 10, marginLeft: 1}}>      
                <TouchableOpacity
                    style={{
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: COLORS.lightLightPurple,
                    padding: 10,
                    }}
                >
                

                    <Feather name='dollar-sign' size={28} color={COLORS.lightPurple}/>
                    <Text style={{fontSize: 12, color: COLORS.black, fontFamily: 'VisbyRB', marginTop: 5}}>Fundraisers</Text>
                    
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 10, marginLeft: 1}}>      
                <TouchableOpacity
                    style={{
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: COLORS.lightLightPurple,
                    padding: 10,
                    }}
                >
                

                    <Feather name='credit-card' size={28} color={COLORS.lightPurple}/>
                    <Text style={{fontSize: 12, color: COLORS.black, fontFamily: 'VisbyRB', marginTop: 5}}>Donations</Text>
                    
                </TouchableOpacity>

            </View>
            <View style={{marginTop: 10, marginLeft: 1}}>      
                <TouchableOpacity
                    style={{
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: COLORS.lightLightPurple,
                    padding: 10,
                    }}
                >
                

                    <Feather name='alert-octagon' size={28} color={COLORS.lightPurple}/>
                    <Text style={{fontSize: 12, color: COLORS.black, fontFamily: 'VisbyRB', marginTop: 5}}>Awareness</Text>
                    
                </TouchableOpacity>
            </View>
        </View>
        </View>
        );
}

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

const RenderDevices = (props, {navigation}) => {
    return(
        <TouchableOpacity 
        style={{
            elevation: 5, 
            justifyContent: 'flex-start',
            flex: 1, 
            borderRadius: 20, 
            backgroundColor: COLORS.white, 
            paddingVertical: 60, 
            paddingHorizontal: 30, 
            marginVertical: 15, 
            marginHorizontal: 20
            }} 
            >
            <Feather name={props.iconName} size={50} color={COLORS.coral}></Feather>
            <View style={{}}>
                <Text style={{fontFamily: 'VisbyRB', fontSize: 20, flexWrap: 'wrap', color: COLORS.salmon}}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

function Home({navigation}) {

    const RenderDevices = (props) => {
        return(
            <View 
            onPress={() => navigation.navigate('Details')}
            style={{
                elevation: 5, 
                justifyContent: 'flex-start',
                flex: 1, 
                borderRadius: 20, 
                backgroundColor: COLORS.white, 
                paddingVertical: 60, 
                paddingHorizontal: 30, 
                marginVertical: 15, 
                marginHorizontal: 20
                }} 
                >
                <Feather name={props.iconName} size={50} color={COLORS.coral}></Feather>
                <View style={{}}>
                    <Text style={{fontFamily: 'VisbyRB', fontSize: 20, flexWrap: 'wrap', color: COLORS.salmon}}>{props.name}</Text>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: COLORS.lightishWhite}} keyboardShouldPersistTaps='handled'>
                
                <View style={{alignItems: 'center', backgroundColor:COLORS.white, borderRadius: 20, flexDirection: 'row', elevation: 10, marginTop: 25, marginHorizontal: 20, marginBottom: 15, padding: 25}}>
                        
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, fontFamily: 'VisbyRB', lineHeight: 25}}>Your data is secure.</Text>
                            <Text style={{fontSize: 15, fontFamily: 'VisbyRegular', lineHeight: 25}}>COVID-Test Valid Until: 3/15/21</Text>
                            

                        </View>
                        <View style={{alignItems: 'center'}}>
                        <Feather name="activity" size={70} color={COLORS.coral} />
                        </View>
                    </View>

                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignContent: 'space-between'}}>
                    
                    <Text style={{marginLeft: 20, fontFamily: 'VisbyRB', fontSize: 25}}>All Tests</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginRight: 20, borderColor: COLORS.black, borderWidth: 3, paddingHorizontal: 5, borderRadius: 15}}>
                        <Text style={{fontFamily: 'VisbyRB', fontSize: 13, marginRight: 5}}>Add New</Text>
                        <Feather name='plus' size={15} color={COLORS.black}></Feather>
                    </TouchableOpacity>
                </View>
                
                <View style={{}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <RenderDevices iconName='flag' name='2/25/21 - Positive'/>
                        <RenderDevices iconName='check' name='12/2/20 - Negative'/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <RenderDevices iconName='check' name='11/2/20 - Negative'/>
                        <RenderDevices iconName='check' name='10/2/20 - Negative'/>
                    </View>
                </View>




                </ScrollView>
            </SafeAreaView> 
    );
}

export default Home;