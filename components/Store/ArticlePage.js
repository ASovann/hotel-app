import React from "react";
import { View, TextInput, Button, FlatList, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Card, FAB, List, ListItem, Image, Rating, Divider } from 'react-native-elements';
import jsonData from '../../assets/data/articles.json';

class ArticlePage extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            data: jsonData
        }
        console.log("your props:",this.props)
        console.log(this.state.data)
    }

    
    submit(data){
        this.props.parentCallBack(data)
    }
    
    
    render(){
        return(
            
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => 
                    <View style={styles.list}>
                        <Image source={{uri:item.pic1_url}} style={styles.image} ></Image>
                        <View style={styles.description}>
                            <View style={styles.title}>
                                <TouchableOpacity style={styles.hotelName} onPress={() => {this.props.navigation.navigate('Hotel Details',{itemDetails: item})}}>{item.name}</TouchableOpacity>
                                <Rating
                                    imageSize={12}
                                    readonly
                                    startingValue={item.rating}
                                    style={ styles.rating }
                                ></Rating>
                            </View>
                            <Text style={styles.short_address}>{item.short_address}</Text>
                            <Text style={styles.details}>{item.type}</Text>
                            <Text style={styles.price}>€{item.rooms[0].price}</Text>

                        </View>
                            
                        
                        <Divider style={{ height:1,backgroundColor: 'blue' }}></Divider>
                    </View> 
                    }>

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
        width:100,
        height:160,
    },
    description:{
        flexDirection: "column",
    },
    title:{
        flexDirection:"row",
        margin:10
    },
    hotelName:{
        fontWeight:'bold',
        margin:10,
        fontSize:12

    },
    rating:{
        margin:10,
    },
    short_address:{
        margin:10,
        fontSize:12,
        flexWrap:"wrap"
        
    },
    details:{
        fontSize:12,
        marginTop:10,
        marginLeft:15
    },
    price:{
        fontWeight: "bold",
        marginTop:30,
        marginLeft:15,
    },
})
export default ArticlePage