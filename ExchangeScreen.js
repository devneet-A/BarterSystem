import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,KeyboardAvoidingView,TouchableOpacity,Alert, ToastAndroid } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader'

export default class Exchange extends Component{

  constructor(){
    super()
    this.state = {
      userName : firebase.auth().currentUser.email,
      itemName : "",
      description : ""
    }
  }

  addItem=(itemName, description)=>{
    var userName = this.state.userName
    db.collection("exchange_requests").add({
      "username"    : userName,
      "item_name"   : itemName,
      "description" : description
     })
     this.setState({
       itemName : '',
       description :''
     })

     this.setState({
       itemName : '',
       description :''
     })

     // NOTE: Comment below return statement when you test the app in ios
     // ToastAndroid.showWithGravityAndOffset('Item ready to exchange',
     //    ToastAndroid.SHORT,
     //  );
     // return this.props.navigation.navigate('HomeScreen')

     // NOTE:  Comment the below return statement when you test the app in android
     return Alert.alert(
          'Item ready to exchange',
          '',
          [
            {text: 'OK', onPress: () => {

              this.props.navigation.navigate('HomeScreen')
            }}
          ]
      );
  }



  render(){
    return(
      <View style={{flex:1}}>
      <MyHeader title="Add Item"/>
      <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Item Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              itemName: text
            })
          }}
          value={this.state.itemName}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={[styles.formTextInput,{height:100}]}
          placeholder ={"Description"}
          onChangeText={(text)=>{
            this.setState({
              description: text
            })
          }}
          value={this.state.description}

        />
        <TouchableOpacity
          style={[styles.button,{marginTop:10}]}
          onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
          >
          <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    )
  }
}