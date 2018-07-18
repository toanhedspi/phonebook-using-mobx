import React, { Component } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements'

export default class DetailScreen extends Component {

    static navigationOptions = {
        title: "DETAILS",
        headerStyle: {backgroundColor: "#FFF"}
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar
                        
                        xlarge
                        rounded
                        source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Text style={{ marginTop: 20, marginBottom: 20 }}>Someone</Text>
                    <View>
                        <Text>INFORMATION</Text>
                        <Text>info 1</Text>
                        <Text>info 2</Text>
                        <Text>info 3</Text>
                        <Text>info 4</Text>
                        <Text>info 1</Text>
                        <Text>info 2</Text>
                        <Text>info 3</Text>
                        <Text>info 4</Text>
                    </View>
                </View>
            </View>
        )
    }
}