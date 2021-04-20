import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase'
import Barter from '../components/barter';


export default class WelcomeScreen extends React.Component {

constructor(){
    super();
    this.state = {
        emailID: '',
        password: ''
    }
}

userLogin = (emailId, password) => {
    firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() => {
            return Alert.alert("Successfully Logged in")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
}

userSignUp = (emailId, password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password).then(()=>{
        return Alert.alert("Successfully signed up!")
    }
    ).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
    })
}

render() {
    return (
      <View>
        <View>
            <Barter/>
          <Text style = {{fontFamily: 'cursive', fontSize: 25, textAlign: 'center', marginTop: 20, marginBottom: 10}}>Welcome to the Barter App!!!</Text>
        </View>
        <View>
          <TextInput
          style = {{width: '70%', height: 35, marginTop: 30}}
            placeholder="abc@xyz.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ emailID: text });
            }}
          />
          <TextInput
         style = {{width: '70%', height: 35, marginTop: 30, marginBottom: 50}}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity
          style = {{width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30}}
            onPress={this.userLogin(this.state.emailID, this.state.password)}>
            <Text style = {{fontSize: 20, fontFamily: 'bold'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {{width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30}}
            onPress={this.userLogin(this.state.emailID, this.state.password)}>
            <Text style = {{fontSize: 20, fontFamily: 'bold'}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}