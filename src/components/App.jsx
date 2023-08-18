import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layuot';
import { Section } from './Section/Section';
import { FilterName } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  filterByName = valueName => {
    this.setState(() => {
      return { filter: valueName };
    });
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(elem => elem.id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const selectedName = contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact}></ContactForm>
        </Section>
        <Section title="Contacts">
          <FilterName
            searchName={filter}
            onSearch={this.filterByName}
          ></FilterName>
          <Contacts
            contacts={selectedName}
            onDeleteContact={this.deleteContact}
          ></Contacts>
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
