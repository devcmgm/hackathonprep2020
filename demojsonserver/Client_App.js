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
    const url = 'http://localhost:3001';
    console.log(url);
    console.log(1);
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log(2);

   fetch(url, {
    }).then( response => response.text())
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
          <h1>My {this.state.externalData} </h1>
          <p>
            {this.state.externalData}
          </p>
        </div>

      ); // Return Loaded
    }
  }

}

export default App;