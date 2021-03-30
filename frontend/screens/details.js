import React, { useEffect, useState, Component } from 'react';
import {  
  StatusBar, 
  ActivityIndicator, 
  FlatList, 
  Button,
  Share,
  SafeAreaView, 
  StyleSheet, 
  Text, 
  Image, 
  View, 
  TouchableOpacity, 
  TouchableHighlight, 
  Dimensions, 
  ImageBackground 
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import {COLORS} from './constants.js'
// Import Document Picker
import DocumentPicker from 'expo-document-picker';
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

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



export default class Details extends Component {
  state = {
    image: null,
    uploading: false,
  };

  render() {
    let {
      image
    } = this.state;

    return (
      
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <TouchableOpacity 
        style={{alignItems: 'center', backgroundColor:COLORS.white, borderRadius: 20, flexDirection: 'row', elevation: 10, marginTop: 25, marginHorizontal: 20, marginBottom: 15, padding: 25}}
        onPress={this._takePhoto}
        >
                        
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontFamily: 'VisbyRB', lineHeight: 25}}>Use Camera for Testing</Text>
                <Text style={{fontSize: 15, fontFamily: 'VisbyRegular', lineHeight: 25}}>Please Ensure that you have proper permission</Text>
                
      
            </View>
            <View style={{alignItems: 'center'}}>
            <Feather name="camera" size={70} color={COLORS.coral} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{alignItems: 'center', backgroundColor:COLORS.white, borderRadius: 20, flexDirection: 'row', elevation: 10, marginTop: 25, marginHorizontal: 20, marginBottom: 15, padding: 25}}
        onPress={this._pickImage}
        >
                          
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontFamily: 'VisbyRB', lineHeight: 25}}>Upload Photo for Testing</Text>
                <Text style={{fontSize: 15, fontFamily: 'VisbyRegular', lineHeight: 25}}>Please Ensure that you have proper permission</Text>
                
      
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
        <StatusBar barStyle="default" />
        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}
      </SafeAreaView>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let {
      image
    } = this.state;

    if (!image) {
      return;
    }

    return (
      <View
        style={styles.maybeRenderContainer}>
        <View
          style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={styles.maybeRenderImageText}>
          {image}
        </Text>
      </View>
    );
  };

  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
        console.log(uploadResult)
        this.setState({
          image: uploadResult.location
        });
      }
    } catch (e) {
    //  console.log({ uploadResponse });
    //  console.log({ uploadResult });
    console.log({ e });
    // alert('Upload failed, sorry :(');
    } finally {
      this.setState({
        uploading: false
      });
      this.props.navigation.navigate('Home')
    }
  };
}

async function uploadImageAsync(uri) {
  let apiUrl = 'http://10.0.0.110:5001/face_rec';

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  //if (Constants.isDevice) {
  //   apiUrl = `https://4feebeb3eedf.ngrok.io/face_rec`;
  // } else {
  //   apiUrl = `http://localhost:5001/face_rec`
  // }

  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('file', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });
  console.log('ho')
  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  return fetch(apiUrl, options)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.name)
    console.log(json.result)
    const name=json.name
    const result=json.result
    alert(name + 's most recent test result is: ' + result);
    
  })
  .catch((error) => {
    console.error(error);
  });
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  maybeRenderImage: {
    height: 250,
    width: 250,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});
