import React, { Component } from 'react';
import { FlatList, Image, TextInput, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { observer } from 'mobx-react/native'
import Modal from 'react-native-modal'
import { toJS } from 'mobx';
import phoneBookStore from './../mobx/PhoneBookStore'

const PhoneBookScreen = observer(
    class PhoneBookScreen extends Component {

        constructor(props) {
            super(props);
            this.onClickItem = this.onClickItem.bind(this)
            this.state = { 
                listApi: phoneBookStore.listApi, 
                modalVisible: false, 
                modifiedItemID: 0 , 
                modifiedName: '', 
                modifiedNumber: '', 
                modifiedItemIndex: -1 
            };

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

        renderItem = ({ item, index }) => {
            const swipeSetting = {
                style: { backgroundColor: '#FFF' },
                autoClose: true,
                right: [{
                    text: 'Edit',
                    backgroundColor: '#4d1300',
                    onPress: () => {
                        this.setState({
                            modalVisible: true,
                            modifiedItemIndex: index
                        });
                    }
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        phoneBookStore.deleteItem(item.id);
                        this.setState({
                            listApi: phoneBookStore.listApi
                        });
                    }
                }],

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
                            // console.log(index)
                            // index = toJS(this.props.screenProps).findIndex(x => x.id === item.id)
                            // console.log(index)
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
                    <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
                        <ActivityIndicator
                            animating size="large" />
                    </View>
                )
            else {
                return (
                    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                        <Modal
                            isVisible={this.state.modalVisible}
                            style={styles.modalStyle}
                            onBackdropPress={() => this.setState({ modalVisible: false })}>

                            <View style={{ height: '75%', backgroundColor: '#FFF', }}>
                                <View style={styles.modalStyleHeader}>
                                    <Text style={{ fontSize: 35 }}>Edit Row</Text>
                                </View>
                                <View style={styles.modalStyleBody}>
                                    <View style={{ width: '80%', marginBottom: 25 }}>
                                        <Text style={{ color: 'green', fontSize: 18 }}>Name</Text>
                                        <TextInput
                                            style={{ height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 5, paddingLeft: 10, marginTop: 10 }}
                                            onChangeText={(text) => this.setState({ modifiedName: text })}
                                            placeholder="some text"
                                        />
                                    </View>
                                    <View style={{ width: '80%', marginBottom: 25 }}>
                                        <Text style={{ color: 'green', fontSize: 18 }}>Numbers</Text>
                                        <TextInput
                                            style={{ height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 5, paddingLeft: 10, marginTop: 10 }}
                                            onChangeText={(text) => this.setState({ modifiedNumber: text })}
                                            placeholder="some text"
                                        />
                                    </View>
                                    <View style={{ width: '80%', marginBottom: 25 }}>
                                        <Text style={{ color: 'green', fontSize: 18 }}>Avatar</Text>
                                        <TextInput
                                            style={{ height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 5, paddingLeft: 10, marginTop: 10 }}
                                            onChangeText={(text) => this.setState({ modifiedName: text })}
                                            placeholder="some text"
                                        />
                                    </View>
                                </View>
                                <View style={styles.modalStyleFooter}>

                                    <Button
                                        buttonStyle={{ backgroundColor: 'green' }}
                                        title='Confirm change'
                                        onPress={() => {
                                            console.log(this.state.modifiedItemIndex)
                                            phoneBookStore.modifiyItem(this.state.modifiedItemIndex, this.state.modifiedName, this.state.modifiedNumber)
                                            this.setState({modalVisible: false})
                                        }}
                                    />
                                </View>
                            </View>
                        </Modal>
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
    modalStyle: {
        flex: 1, 
        alignSelf: 'center', 
        width: '75%' 
    },
    modalStyleHeader: { 
        flex: 1, 
        paddingLeft: 20, 
        paddingTop: 20, 
        borderBottomColor: '#D3D3D3', 
        borderBottomWidth: 1, 
        width: '100%' 
    },
    modalStyleBody: { 
        flex: 5, 
        marginTop: 20, 
        alignItems: 'center', 
        borderBottomColor: '#D3D3D3', 
        borderBottomWidth: 1
    },
    modalStyleFooter: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }

});

export default PhoneBookScreen;
