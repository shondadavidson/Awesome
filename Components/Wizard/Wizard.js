import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios'
import {url} from '../../url'

class Wizard extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            img: '',
            mortgage: '',
            rent: '',
            stepOne: true,
            stepTwo: false,
            stepThree: false
        }
    }
    static navigationOptions = {
        title: 'Add New Property'
    }
    postHouse(){
        const { name, address, city, state, zip, img, mortgage, rent } = this.state;
        axios.post(`${url.url}/api/house`, {name, address, city, state, zip, img, mortgage, rent}).then( () => {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                img: '',
                mortgage: '',
                rent: '',
                stepOne: true,
                stepTwo: false,
                stepThree: false
            })
            this.props.navigation.navigate('Home')

        })
    }
    stepTwo = () => {
        this.setState({
            stepOne: false,
            stepTwo: true,
            stepThree: false,
        })
    }
    stepThree = () => {
        this.setState({
            stepOne: false,
            stepTwo: false,
            StepThree: true
        })
    }
    cancel = () => {
        this.props.navigation.navigate('Home')
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            img: '',
            mortgage: '',
            rent: '',
            stepOne: true,
            stepTwo: false,
            stepThree: false
        })
    }
    render(){
        if(this.state.stepOne === true){
        return(
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonTwo} onPress={() => {this.cancel()}}><Text>Cancel</Text></TouchableOpacity>
                
                <Text>Add New Listing</Text>
              
                <TextInput style={styles.input} value={this.state.name} placeholder = "Property Name" placeholderTextColor ="black" onChangeText={(name) => this.setState({name})}/>
                <TextInput style={styles.input} value={this.state.address} placeholder="Address" placeholderTextColor ="black" onChangeText={(address) => this.setState({address})}/>
                <TextInput style={styles.input} value={this.state.city} placeholder="city" placeholderTextColor ="black" onChangeText={(city) => this.setState({city})}/>
                <TextInput style={styles.input} value={this.state.state} placeholder="state" placeholderTextColor ="black" onChangeText={(state) => this.setState({state})}/>
                <TextInput style={styles.input} value={this.state.zip} placeholder="zip" placeholderTextColor ="black" onChangeText={(zip) => this.setState({zip})}/>
                <TouchableOpacity style={styles.button} onPress={() => { this.stepTwo()}}><Text>Next</Text></TouchableOpacity>
            </View>
        )
        } else if(this.state.stepTwo === true){
            return(
                <View style={styles.container}>
                <TouchableOpacity style={styles.buttonTwo} onPress={() => {this.cancel()}}><Text>Cancel</Text></TouchableOpacity>
                
                <Text>Add New Listing</Text>
                <TextInput style={styles.input} value={this.state.img} placeholder="Image URL" placeholderTextColor ="black" onChangeText={(img) => this.setState({img})}/>
                <TouchableOpacity style={styles.button} onPress={() => { this.stepThree()}}><Text>Next</Text></TouchableOpacity>
            </View>
            )
        } else {
            return (
                <View style={styles.container}>
                <TouchableOpacity style={styles.buttonTwo} onPress={() => {this.cancel()}}><Text>Cancel</Text></TouchableOpacity>
                
                <Text>Add New Listing</Text>
                <TextInput style={styles.input} value={this.state.mortgage} placeholder="Mortgage" placeholderTextColor ="black" onChangeText={(mortgage) => this.setState({mortgage})}/>
                <TextInput style={styles.input} value={this.state.rent} placeholder="Rent" placeholderTextColor ="black" onChangeText={(rent) => this.setState({rent})}/>
                <TouchableOpacity style={styles.button} onPress={() => { this.postHouse()}}><Text>Add Home</Text></TouchableOpacity>
            </View>
            )
        }
    }
}

export default Wizard

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
    },
    input: {
       margin: 5,
       height: 40,
       width: 160,
       borderColor: 'black',
       borderWidth: 1
    },
    buttonTwo: {
    alignItems: 'center',
    backgroundColor: '#FEC2C2',
    padding: 10
    }
  });