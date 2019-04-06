import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {url} from '../../url'


class Dashboard extends Component{
    constructor(props) {
        super(props)

        this.state = {
            header: null,
            houses: [],
            
        }
     this.deleteHouse = this.deleteHouse.bind(this)
    }
    //ifconfig |grep inet
    componentDidMount(){
        axios.get(`${url.url}/api/houses`).then(res => {
            console.log(55555,res.data)
            this.setState({
                houses: res.data
            })
        })
    }
    deleteHouse(id){
        axios.delete(`${url.url}/api/house/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    render(){
        console.log(88888,this.state)

        const mappedHouses = this.state.houses.map(i => {

            return(
    
                <View style={styles.container} key={i.id}>
                    
                    <Image style = {{ width: 400, height: 200 }} source = {{uri:i.img}}/>
                    <Text style={{color: "black"}}>{i.name}</Text>
                    <Text style={{color: "black"}}>{i.address}</Text>
                    <Text style={{color: "black"}}>{i.city}</Text>
                    <Text style={{color: "black"}}>{i.state}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.deleteHouse(i.id)}><Text>Delete</Text></TouchableOpacity>
                    
                </View>
            )
        }) 
        return <View style={{width: '100%', marginTop: 50}}><ScrollView>{mappedHouses}</ScrollView></View>
    }
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#AFD5C0',
    },
    button: {
    alignItems: 'center',
    backgroundColor: '#89EB91',
    padding: 10
  }
  });