import React from "react";
import { View, TextInput, FlatList, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Card, FAB, List, Button,ListItem, Image, Rating, Divider } from 'react-native-elements';
class RoomSelectPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item: this.props.route.params.roomsDetails,
            bookingDate: this.props.route.params.bookingDate
        }
        console.log(this.state.item)
    }




    render(){
        
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.item}
                    renderItem={({item}) =>
                        
                        <View style={styles.list} >
                            
                            <View style={styles.details}>
                                <Text>{item.title}</Text>
                            
                                <Text>non-refundable</Text>
                                <Text>Price for 2 adults</Text>
                                <Text>Room size 20<var>m<sup>2</sup></var></Text>
                                <Text>{item.advantage}</Text>
                                <Text>Free wifi Bath Air conditionning Private Bathroom</Text>
                                <Text style={styles.price}>€{item.price}</Text>
                                <Button title={"Select"} type="outline" onPress={() => {this.props.navigation.navigate('Your personal info', {bookingDetails: item, bookingDate: this.state.bookingDate})}}></Button>
                            </View>
                            <Image source={{uri:item.room_pic_url}} style={styles.image} ></Image>
                            
                        </View>
                    }
                >

                </FlatList>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 35,
        backgroundColor: '#fff'
    
    },
    list:{
        flexDirection:"row",
        padding: 20
    },
    image:{
        
        width:60,
        height:80,
    },
    details:{
        flexDirection:"column",
    }

})
export default RoomSelectPage