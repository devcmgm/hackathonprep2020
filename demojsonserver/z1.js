import React, { Component } from 'react';
import './App.css';

var data = ''

class App extends Component {
  state = {
    fromwebjson: { data: 'works' } 
  }

async componentDidMount() {

const url ='http://40.122.213.229:3000/';
  console.log(url);

  fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  }).then(function(response) {
     console.log(response);
    })

}


render() {

  return (
<div>
        <h1>My {data} </h1>
        <p>
         {data}
        </p>
      </div>

);
}

}

export default App;
