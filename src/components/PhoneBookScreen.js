import React, { Component } from 'react';
import { FlatList, Image, Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { observer } from 'mobx-react/native'
import { toJS } from 'mobx';
import { Observer } from 'mobx-react'
import phoneBookStore from './../mobx/PhoneBookStore'

const PhoneBookScreen = observer(
    class PhoneBookScreen extends Component {

        constructor(props) {
            super(props);
            this.onClickItem = this.onClickItem.bind(this)
            this.state = { list: phoneBookStore.list};
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
                rightComponent={{ icon: 'search', color: '#000', onPress: () => phoneBookStore.counter[0]++ }}
            />
        };

        keyExtractor = (item, index) => item.numbers

        onClickItem = ( index )  => {
            // console.log(item);
            this.props.navigation.navigate('Details', {index: index})
        }

        renderItem = ({ item }) => {
            const swipeSetting = {
                style: {backgroundColor: '#FFF'},
                autoClose: true,
                right: [{
                    text: 'Delete',
                    onPress: () => {
                        phoneBookStore.deleteItem(item.numbers);
                        this.setState({
                            list: phoneBookStore.list
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
                            <Image source={{ uri: item.avatar_url }} style={{ borderRadius: 35, height: 70, width: 70 }} />
                        }
                        subtitle={item.numbers}
                        onPress={() => {
                            index = toJS(phoneBookStore.list).findIndex(x => x.numbers == item.numbers)
                            this.onClickItem(index)
                        }}
                    />
                </Swipeout>
            )
        }

        render() {
            const datas = phoneBookStore.list.slice();
 
            return (
                <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={datas}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />                    
                </View>
            )
        }
    }
)
const styles = StyleSheet.create({
});

export default PhoneBookScreen;
