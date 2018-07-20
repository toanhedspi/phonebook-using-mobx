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
        const datas = phoneBookStore.list[index];

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar

                        xlarge
                        rounded
                        source={{ uri: datas.avatar_url }}
                        activeOpacity={0.7}
                    />
                    <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 30 }}>{datas.name}</Text>
                    <View>
                        <Text>{datas.numbers}</Text>
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