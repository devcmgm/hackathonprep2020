import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.Contact.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, firstName, lastName, email, phone, completed } = this.props.Contact;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }/>{' '}
                    {firstName},{lastName},{email},{phone}
                    <button onClick={this.props.delContact.bind(this, id)} style={{ float: 'right' }}>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
        )
    }
}

// PropTypes
ContactItem.PropTypes = {
    Contacts: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delContact: PropTypes.func.isRequired
}


export default ContactItem;