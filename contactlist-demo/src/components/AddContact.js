import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddContact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    onSubmit = (e) => {
       /* e.preventDefault();
        this.props.addContact(this.state.firstName, this.state.lastName, this.state.email,this.state.phone );
        */
       this.props.addContact('this.state.firstName', 'this.state.lastName', 'this.state.email','this.state.phone' );
        
        this.setState({ firstName: 'TBD',lastName: 'TBD', email: 'TBD',phone: 'TBD' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="firstName"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add First Name..." 
                    value={this.state.firstName}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="lastName"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Last Name..." 
                    value={this.state.lastName}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="email"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Email..." 
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="phone"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Phone..." 
                    value={this.state.phone}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Add Contact"
                    className="btn"
                    style= {{flex: '1'}}
                />
            </form>
        )
    }
}

// PropTypes
AddContact.PropTypes = {
    addContact: PropTypes.func.isRequired
}

export default AddContact;
