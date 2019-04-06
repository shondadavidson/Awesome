import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';



class Wizard extends Component{
    constructor(){
        super()
        this.state = {
            header: null,
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    static navigationOptions = {
        title: 'Add New Property'
    }

    render(){
        return(
            <View style={styles.container}>
                
                <Text>Add New Listing</Text>
              
                <TextInput value={this.state.name} placeholder="Property Name" onChangeText={(name) => this.setState({name})}/>
                <TextInput value={this.state.address} placeholder="Address" onChangeText={(address) => this.setState({address})}/>
                <TextInput value={this.state.city} placeholder="Name" onChangeText={(city) => this.setState({city})}/>
                <TextInput value={this.state.state} placeholder="Name" onChangeText={(state) => this.setState({state})}/>
                <TextInput value={this.state.zipcode} placeholder="Name" onChangeText={(zipcode) => this.setState({zipcode})}/>
               
            </View>
        )
    }
}

export default Wizard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });