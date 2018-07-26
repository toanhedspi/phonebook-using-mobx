import React, { Component } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements'
import phoneBookStore from './../mobx/PhoneBookStore'

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { list: phoneBookStore.list };
    }

    static navigationOptions = {
        title: "DETAILS",
        headerStyle: { backgroundColor: "#FFF" }
    }

    render() {
        const { navigation } = this.props;
        const index = navigation.getParam('index', 'NO-ITEM');
        const itemData = this.props.screenProps[index];

        console.log(phoneBookStore.listApi[index].id)
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar

                        xlarge
                        rounded
                        source={{ uri: itemData.owner.avatar_url }}
                        activeOpacity={0.7}
                    />
                    <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 30 }}>{itemData.name}</Text>
                    <View>
                        <Text>{itemData.id}</Text>
                        <Text>{itemData.node_id}</Text>
                        <Text>{itemData.full_name}</Text>
                        <Text>{itemData.owner.url}</Text>
                        <Text>{itemData.owner.html_url}</Text>
                        <Text>{itemData.owner.type}</Text>
                        <Text>{itemData.description}</Text>
                        <Text>{itemData.created_at}</Text>
                        <Text>{itemData.language}</Text>
                    </View>
                </View>
            </View>
        )
    }
}