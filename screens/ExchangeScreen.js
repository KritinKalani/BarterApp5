import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase'
import db from '../config'

export default class ExchangeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            itemName: '',
            itemDescription: ''
        }
    }

    addItems = (itemName, itemDescription) => {
        db.collection('ItemInfo').add({
            userName: this.state.userName,
            itemName: this.state.itemName,
            itemDescription: this.state.itemDescription
        })
        this.setState({
            itemName: '',
            itemDescription: ''
        })
        return Alert.alert('Item ready to be exchanged!', [{
            text: 'OK', onPress: () => {
                this.props.navigation.navigate('HomeScreen')
            }
        }])
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ width: '100%', height: 30, marginTop: 30, marginBottom: 30 }}
                    placeholder='Item Name'
                    onChangeText={(text) => {
                        this.setState({ itemName: text })
                    }}
                />
                <TextInput
                    style={{ width: '100%', height: 30, marginTop: 30, marginBottom: 30 }}
                    placeholder='Item Description'
                    onChangeText={(text) => {
                        this.setState({ itemName: text })
                    }}
                />
                <TouchableOpacity style={{ width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30 }} onPress={this.addItems(this.state.itemName, this.state.itemDescription)}>
                    <Text>Add Items</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
