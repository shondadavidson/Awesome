import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


class Dashboard extends Component{
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    render(){
        console.log(1232,this.state)
        return(

            <View>
                
                <Text>Dashboard</Text>
                
            </View>
        )
    }
}

export default Dashboard