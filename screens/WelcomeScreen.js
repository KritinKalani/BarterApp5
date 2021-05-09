import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import Barter from '../components/barter';


export default class WelcomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      emailID: '',
      password: '',
      isModaVisible: false,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      confirmPassword: ''
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

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert('Password and Confirm Password dont atch. \n Please check again')
    } else {
      firebase.auth().createUserWithEmailAndPassword(emailId, password).then(() => {
        db.collection('Users').add({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailID: this.state.emailID,
          password: this.state.password,
          phoneNumber: this.state.phoneNumber,
          confirmPassword: this.state.confirmPassword,
          address: this.state.address
        })
        return Alert.alert("Hey" + this.state.firstName + "You Have successfully signed up!")
      }
      ).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      })
    }
  }

  showModal = () => {
    return (
      <Modal
        animationType="fade"
        visible={this.state.isModaVisible}
        transparent={true}>
        <View style={{ width: 300 }}>
          <ScrollView>
            <KeyboardAvoidingView>
              <Text>Sign Up</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder="First Name"
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({ firstName: text })
                }} />
              <TextInput
                style={styles.formTextInput}
                placeholder="Last Name"
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({ lastName: text })
                }} />
              <TextInput
                style={styles.formTextInput}
                placeholder="Phone Number"
                keyboardType={'numeric'}
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({ phoneNumber: text })
                }} />
              <TextInput
                style={styles.formTextInput}
                placeholder="emailID"
                keyboardType={'email-address'}
                onChangeText={(text) => {
                  this.setState({ emailID: text })
                }} />
              <TextInput
                style={styles.formTextInput}
                placeholder="Address"
                multiline={true}
                onChangeText={(text) => {
                  this.setState({ address: text })
                }} />
              <TextInput
                style={styles.formTextInput}
                placeholder="Password"
                secureTextEntry={true}
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({ password: text })
                }} />
              <TextInput
                style={styles.formTextInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({ confirmPassword: text })
                }} />
              <View>
                <TouchableOpacity style={{ width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30 }} onPress={this.userSignUp(this.state.emailID, this.state.password, this.state.confirmPassword)}><Text>Sign Up</Text></TouchableOpacity></View>
              <View><TouchableOpacity style={{ width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30 }} onPress={() => {
                this.setState({ isModaVisible: false })
              }}><Text>Cancel</Text></TouchableOpacity></View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    )
  }

  render() {
    return (
      <View>
        <View>
          <Text style={{ fontFamily: 'cursive', fontSize: 25, textAlign: 'center', marginTop: 20, marginBottom: 10 }}>Welcome to the Barter App!!!</Text>
        </View>
        {this.showModal()}
        <View>
          <TextInput
            style={{ width: '50%', height: 35, marginTop: -750, alignSelf: 'center', alignItems: 'center' }}
            placeholder="abc@xyz.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ emailID: text });
            }}
          />
          <TextInput
            style={{ width: '50%', height: 35, marginTop: 30, alignSelf: 'center', alignItems: 'center' }}
            placeholder="Password"
            secureTextEntry={true}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity
            style={{ width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30 }}
            onPress={this.userLogin(this.state.emailID, this.state.password)}>
            <Text style={{ fontSize: 20, fontFamily: 'bold' }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30 }}
            onPress={() => {
              this.setState({ isModaVisible: true })
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  }
})