import React, { Component } from 'react';
import './App.css';
import Async from 'react-async';

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
    console.log(1);
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log(2);

   fetch(url, {
    }).then( response => response.json())
    .then(responseText => {
      console.log(responseText)
      this.setState({ externalData: responseText } )
      })
    .catch((error) => {
     return Promise.reject()
    });

  }


  render() {
    if (this.state.externalData === null) {
      // Render loading state ...
      return (
        <div>
          <h1>Loading</h1>
        </div>
      ); // Loading
    } else {
      return (
        <div>
          <h1>My </h1>
          <div>
    {this.state.externalData.map((item, index) => (
        <p>{item.request_type},{item.create_date}!</p>
    ))}
    </div>
          <p> 
           TBD
          </p>
        </div>

      ); // Return Loaded
    }
  }

}

export default App;