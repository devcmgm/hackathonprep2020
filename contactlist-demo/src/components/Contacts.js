import React, { Component } from "react";
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';


class Contacts extends Component {
    render() {
        return this.props.Contacts.map(contactList => (
            <ContactItem firstName={contactList.firstName} lastName={contactList.lastName} email={contactList.email} phone={contactList.phone} markComplete={this.props.markComplete} delContact={this.props.delContact}/>
        ));
    }
}

// PropTypes
Contacts.PropTypes = {
    Contacts: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delContact: PropTypes.func.isRequired
}

export default Contacts;