import React, { Component } from 'react';
import ContactCard from '../components/ContactCard';
import '../index.scss';
import AddContact from './AddContact';
import {CONTACTS} from "../ContactList";

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    };

    this.handleNewContact = this.handleNewContact.bind(this);
  }
    componentWillMount() {
      const savedContacts = localStorage.getItem('contacts');
      if (savedContacts) {
          this.setState({
              contactList: JSON.parse(savedContacts)
          })
      } else {
          this.setState({
              contactList: CONTACTS
          });
      }
    }

    async handleNewContact(newContact) {
        await this.setState(prevState => ({
            contactList: [
                ...prevState.contactList, newContact]
        }));
        localStorage.setItem('contacts', JSON.stringify(this.state.contactList));
    }
  render() {


    return (
    	<div className="contacts-wrapper">
          	<ul className="list-group" id="contact-list">
           		{ this.state.contactList.map(
                  (contact) =>
                  <li key={contact.email} className="list-group-item contact-item">
                    <ContactCard contact = {contact}/>
                  </li>
              	)}
            </ul>
            <AddContact onSubmit= {this.handleNewContact} />
        </div>
    );
  }
}

export default Contact;

