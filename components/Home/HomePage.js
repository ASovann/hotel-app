import React  from "react";
import ArticlePage from "../Store/ArticlePage";
import { View } from "react-native";
import styles from './styles';

class HomePage extends React.Component {

    constructor(props){
        super(props);
    }

    

   
    handleCallBack = (childData) => {

        
    }
    

    

    render(){
        return(
            <View>
                <ArticlePage parentCallBack = {this.handleCallBack} navigation = {this.props.navigation}></ArticlePage>
            </View>
        )
    }


}
export default HomePage