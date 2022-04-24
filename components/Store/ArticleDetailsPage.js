import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Card, FAB, List, ListItem, Image, Rating, Button  } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";

class ArticleDetailsPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            item: this.props.route.params.itemDetails,
            isDatePickerVisibleCheckIn: false,
            isDatePickerVisibleCheckOut: false,
            dateCheckInPicked: "Pick a date",
            dateCheckOutPicked: "Pick a date",
        }
        console.log(this.props)
    }
    showDatePickerCheckIn = () =>{
        this.state.isDatePickerVisibleCheckIn = true
        console.log(this.state.isDatePickerVisibleCheckIn)
    }
    showDatePickerCheckOut = () =>{
        this.state.isDatePickerVisibleCheckOut = true
        console.log(this.state.isDatePickerVisibleCheckOut)
    }

    hideDatePickerCheckIn = () => {
        this.state.isDatePickerVisibleCheckIn = false
    }
    hideDatePickerCheckOut = () => {
        this.state.isDatePickerVisibleCheckOut = false
    }

    handleConfirmCheckIn = (date) => {
        console.warn("A date has been picked: ", date)
        this.state.dateCheckInPicked = date != null ? date : "Pick a date"
        this.hideDatePickerCheckIn();
    }

    handleConfirmCheckOut = (date) => {
        console.warn("A date has been picked: ", date)
        this.state.dateCheckOutPicked = date != null ? date : "Pick a date"
        this.hideDatePickerCheckOut();
    }

    render(){
        
        return(
            <View style={styles.container}>
                
                <Image style={styles.image} source={{uri: this.state.item.pic_url_2}}></Image>
                <View style={styles.title}>
                    <Text style={styles.name}>{this.state.item.name}</Text>
                    <Rating 
                        imageSize={15}
                        readonly
                        startingValue={this.state.item.rating}
                        style={ styles.rating }>
                        
                    </Rating>
                </View>
                
                <Text style={styles.description}>{this.state.item.description}</Text>
                <Text style={styles.pickanight}>Pick for 1 night (-)</Text>
                <Text style={styles.price}>€{this.state.item.rooms[0].price}</Text>
                <Text style={styles.address}>{this.state.item.address}</Text>
                <Text style={styles.location}>{this.state.item.location}</Text>
                <Text style={styles.bestcomment}>Comment</Text>
                <View style={styles.checkin}>
                    <Text style={styles.checkinOne}>Check-in</Text>
                    <Text style={styles.checkinTwo}>Check-out</Text>
                </View>
                <View style={styles.PickDateLine}>
                    <TouchableOpacity style={styles.Pickdate} onPress={this.showDatePickerCheckIn}><Text style={styles.textPickdate}>{this.state.dateCheckInPicked}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.Pickdate} onPress={this.showDatePickerCheckOut}><Text style={styles.textPickdate}>{this.state.dateCheckOutPicked}</Text></TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={this.state.isDatePickerVisible}
                        mode="date"
                        onConfirm={this.handleConfirm}
                        onCancel={this.hideDatePicker}
                    ></DateTimePickerModal>
                
                </View>
                
                <Text style={styles.commentaire}>What guests loved the most:</Text>
                <Button title={"Select rooms"} raised='true' containerStyle={styles.button} onPress={() => this.props.navigation.navigate('Choose Rooms',{roomsDetails: this.state.item.rooms,bookingDate:[this.state.dateCheckInPicked, this.state.dateCheckOutPicked]})}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        
        backgroundColor: '#fff'
    
    },
    image:{
        width:"100%",
        height:180,
        marginBottom:10
    },
    title:{
        flexDirection: 'row'
    },
    name:{
        
        fontWeight:'bold',
        marginLeft:15,
        fontSize:20

    },
    rating:{
    },
    description:{
        fontStyle:"italic",
        fontSize:15,
        marginTop:10,
        marginLeft:15,
        
    },
    pickanight:{
        marginTop:30,
        marginLeft:15
    },
    price:{
        
        fontWeight: "bold",
        
        marginLeft:15,
        marginBottom:20
    },
    address:{
        margin:10,
        marginLeft:25
    },
    location:{
        margin:10,
        marginLeft:25
    },
    bestcomment:{
        margin:10,
        marginLeft:25
    },
    checkin:{
        flexDirection: 'row'
    },
    checkinOne:{
        marginTop:25,
        marginLeft:25,
        marginRight:25,
        marginBottom:5
    },
    checkinTwo:{
        marginTop:25,
        marginLeft:25,
        marginBottom:5
    },
    PickDateLine:{
        flexDirection: 'row'
    },
    Pickdate:{
        marginLeft:25,
        marginBottom:15,
        marginRight:15
    
    },
    textPickdate:{
        color:"cyan"
    },
    commentaire:{

    },
    button:{
        margin:10,
    }
})

export default ArticleDetailsPage