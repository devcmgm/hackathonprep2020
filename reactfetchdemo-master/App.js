import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Async from 'react-async';
import { Updates } from 'expo';
import MGM311 from "./MGM311.js"


class App extends Component {
  state = {
    apiInfo: null,
    externalData: null,

  };

  componentDidMount() {
    this.getText()
      ;
  }

  async getText() {
    const url = 'https://data.montgomeryal.gov/resource/7wcg-q8pp.json';
    console.log(url);

    fetch(url, {
    }).then(response => response.json())
      .then(responseText => {
        //console.log(responseText)
        this.setState({ externalData: responseText })
      })
      .catch((error) => {
        return Promise.reject()
      });

  }

  render() {

    if (this.state.externalData === null) {
      // Render loading state ...
      return (
        <View style={styles.container}>
          <Image style={{
            width: 400,
            height: 400,
            resizeMode: 'contain',
          }} source={require('./mgmopendata.png')}></Image>
          <Text>Loading !</Text>
        </View>
      );
    } else {

      const items = this.state.externalData.map(function (item, index) {
        return <li> {item.request_type} </li>;
      });

      //console.log("FOO" + items);


      return (
        <View style={styles.container}>
          <Text>2 know Works Loaded  </Text>
          <Image style={{
            width: 400,
            height: 400,
            resizeMode: 'contain',
          }} source={require('./mgmopendata.png')}></Image>
          <MGM311 myitems={this.state.externalData} />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
