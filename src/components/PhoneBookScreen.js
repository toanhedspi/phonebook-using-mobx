import React, { Component } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'

var datas = [
    {
        name: "s4",
        numbers: "0124453324",
        avatar_url: "https://static-cdn.jtvnw.net/emoticons/v1/798274/3.0"
    },
    {
        name: "donger",
        numbers: "0114467024",
        avatar_url: "https://pbs.twimg.com/profile_images/1000303810642837504/LQmBgJmU_400x400.jpg"
    },
    {
        name: "singsong",
        numbers: "0556252023",
        avatar_url: "https://static-cdn.jtvnw.net/emoticons/v1/70144/3.0"
    },
    {
        name: "dendi",
        numbers: "0934410574",
        avatar_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1bb540e84a0ff4925668f7bb748cf705c080a059_full.jpg"
    },
    {
        name: "miracle",
        numbers: "0124835884",
        avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cq9WlnulqzvTHiRuJNtZVNN8YF0dfiecPglFGfoQkiakdxtK"
    },
]

export default class PhoneBookScreen extends Component {

    keyExtractor = (item, index) => item.numbers

    renderItem = ({ item }) => {
        console.log(item.avatar_url)
        return (
            <ListItem
                title={item.name}
                titleStyle={{ fontSize: 20, marginBottom: 7 }}
                avatar={
                    <Image source={{ uri: item.avatar_url }} style={{ borderRadius: 35, height: 70, width: 70 }} />
                }
                subtitle={item.numbers}
            />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1, marginTop: 30 }}
                    data={datas}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});