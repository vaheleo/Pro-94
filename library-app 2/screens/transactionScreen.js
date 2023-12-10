import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from "../config"

export default class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      book_id: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Transactions</Text>
       </View>

    )
  }
}

const styles = StyleSheet.create({
container:{
  marginLeft: 60,
  marginRight: 55,
  marginTop: 50,
  backgroundColor: 'gray',
  padding: 10,
  borderRadius: 20
},
logo:{
  fontSize: 40
}
})