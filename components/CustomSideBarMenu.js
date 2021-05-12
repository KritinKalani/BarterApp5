import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class SideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <DrawerItems {...this.props}/>
                <View>
                    <TouchableOpacity style={{ width: 100, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 30 }} onPress = {()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut();
                    }}>
                        <Text>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

