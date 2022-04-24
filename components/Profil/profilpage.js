import React from "react";
import { View, TextInput, FlatList, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Avatar, Image } from 'react-native-elements';


class ProfilPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item: this.props.route.params.bookingDetails,
            bookingDate: this.props.route.params.bookingDate
        }
        console.log(this.state.item)
        console.log(this.state.bookingDate)
    }
    render(){
        return(
            <View style={styles.container}></View>
        )
    }
    
}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#fff'

    }
})
export default ProfilPage