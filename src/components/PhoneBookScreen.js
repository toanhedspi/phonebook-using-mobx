import React, { Component } from 'react';
import { FlatList, Image, Button, Platform, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { observer } from 'mobx-react/native'
import { toJS, toJSON } from 'mobx';
import { Observer } from 'mobx-react'
import phoneBookStore from './../mobx/PhoneBookStore'

const PhoneBookScreen = observer(
    class PhoneBookScreen extends Component {

        constructor(props) {
            super(props);
            this.onClickItem = this.onClickItem.bind(this)
            this.state = { listApi: phoneBookStore.listApi };

            phoneBookStore.getMoviesFromApi();
        }
        static navigationOptions = {
            header: <Header
                outerContainerStyles={{ backgroundColor: '#fff', borderBottomWidth: 3, paddingTop: 20, paddingBottom: 10, paddingLeft: 5 }}
                innerContainerStyles={{}}
                leftComponent={
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Image
                            source={require('../asset/science.png')}
                            style={{ width: 30, height: 30 }}
                        />
                        <Text style={{ fontSize: 18, marginTop: 3 }}>PHONEBOOK</Text>
                    </View>
                }
                rightComponent={{
                    icon: 'search',
                    color: '#000',
                    onPress: () => {

                    }
                }}
            />
        };

        keyExtractor = (item, index) => item.id.toString()

        onClickItem = (index) => {
            this.props.navigation.navigate('Details', { index: index })
        }

        renderItem = ({ item }) => {
            const swipeSetting = {
                style: { backgroundColor: '#FFF' },
                autoClose: true,
                right: [{
                    text: 'Delete',
                    onPress: () => {
                        phoneBookStore.deleteItem(item.id);
                        this.setState({
                            listApi: phoneBookStore.listApi
                        });
                    }
                }]
            }
            return (

                <Swipeout {...swipeSetting} >
                    <ListItem
                        title={item.name}
                        titleStyle={{ fontSize: 20, marginBottom: 7 }}
                        avatar={
                            <Image source={{ uri: item.owner.avatar_url }} style={{ borderRadius: 35, height: 70, width: 70 }} />
                        }
                        subtitle={item.id}
                        onPress={() => {
                            index = toJS(phoneBookStore.listApi).findIndex(x => x.id === item.id)
                            console.log(index)
                            this.onClickItem(index)
                        }}
                    />
                </Swipeout>
            )
        }

        render() {
            const datas = this.props.screenProps
            if (this.state.listApi.length == 0)
                return (
                    <View style ={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
                    <ActivityIndicator                   
                        animating size="large" />
                    </View>
                )
            else {
                return (
                    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                        {/* <Button title="Click me" onPress={this.getAPI} /> */}
                        <FlatList
                            style={{ flex: 1 }}
                            data={datas}
                            extraData={this.state}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                        />
                    </View>
                )
            }
        }
    }
)
const styles = StyleSheet.create({
});

export default PhoneBookScreen;
