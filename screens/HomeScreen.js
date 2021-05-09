import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';

export default class HomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            RequestedItems: []
        }
        this.requestRef = null
    }

    keyExtractor = (index) => index.toString()

    getRequestedItemsList = () => {
        this.requestRef = db.collection('ItemInfo').onSnapShot((snapshot) => {
            var RequestedItemsList = snapshot.docs.map(document => document.data())

            this.setState({ RequestedItems: RequestedItemsList })
        })
    }

    renderItem = ({ item, i }) => {
        return (
            <ListItem
                key={i}
                title={item.itemName}
                subtitle={item.itemDescription}
                titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: '20' }}
                rightElement={<TouchableOpacity style={{ width: 60, height: 20, alignItems: 'center', alignSelf: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'bold' }} >Exchange</Text>
                </TouchableOpacity>}
            />
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    keyExtractor={this.keyExtractor()}
                    data={this.state.RequestedItems}
                    renderItem={this.renderItem()} />

            </View>
        )
    }
}