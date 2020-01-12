// Importing Modules
import React, { Component } from 'react';
import axios from 'axios';

// import uuid from 'uuid';  // Not Used Anymore

// Importing React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Components
import contacts from './components/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/AddContact';
import About from './components/pages/About';

import './App.css';

const contactsList = [
  { id: 1, firstName: "Leanne", lastName: "Graham", email: "emailTBD", phone: "phoneTBD" },
  { id: 2, firstName: "Ervin", lastName: "Howell", email: "emailTBD", phone: "phoneTBD" },
  { id: 3, firstName: "Clementine", lastName: "Bauch", email: "emailTBD", phone: "phoneTBD" },
  { id: 4, firstName: "Patricia", lastName: "Lebsack", email: "emailTBD", phone: "phoneTBD" }
];
class App extends Component {
  state = {
    contacts: [ { firstName: 'zac', lastName: 'lewis',email: 'email', phone: 'phone'  } ]
  }

  componentDidMount() {
    /*axios.get('https://jsonplaceholder.typicode.com/contacts?_limit=10')
      .then(res => 
        */
    var initcontacts = [ { firstName: 'zac', lastName: 'lewis',email: 'email', phone: 'phone'  } ]
    this.setState({ contacts: initcontacts });
  }

  // Toggle Complete
  markComplete = (id) => {
      this.setState({
        contacts: this.state.contacts.map(contact => {
          if(contact.id === id)
            contact.completed = !contact.completed;
          return contact;
        })
      });
  }

  // Delete contact
  delcontact = (id) => {
    /*axios.delete(`https://jsonplaceholder.typicode.com/contacts/${id}`)
      .then(res => this.setState({ contacts: [...this.state.contacts.filter(contact => contact.id !== id)]}));
      */
  }

  addcontact = (firstName,lastName,email,phone) => {
    
    const newcontact = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      completed: false
    }
    /*
    this.setState({ contacts: [...this.state.contacts, newcontact]})
   
    axios.post('https://jsonplaceholder.typicode.com/contacts', {
      title: title,
      completed: false
    })
      .then(res => */
        
      this.setState({
        contacts: [...this.state.contacts, newcontact]
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddContact addcontact={this.addcontact} />
                <contacts contacts={this.state.contacts} markComplete = {this.markComplete} delcontact={this.delcontact}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;