import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import axios from 'axios';


class Dashboard extends Component{
    constructor(props) {
        super(props)

        this.state = {
            houses: [],
            
        }
    }
    //ifconfig |grep inet
    componentDidMount(){
        axios.get(`http://192.168.2.158:3400/api/houses`).then(res => {
            console.log(55555,res.data)
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
                    
                    <Text style={{color: "black"}}>{i.name}</Text>
                    <Text style={{color: "black"}}>{i.address}</Text>
                    <Text style={{color: "black"}}>{i.city}</Text>
                    <Text style={{color: "black"}}>{i.state}</Text>
                    <Image style = {{ width: 400, height: 200 }} source = {{uri:i.img}}/>
                    
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
      backgroundColor: '#F5FCFF',
    }
  });