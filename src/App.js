import React from 'react';
import './App.css';
import Container from './components/UI/container'
import Section from './components/UI/Section'
import ContactForm from './components/contactForm'
import ContactList from './components/contactList'
import Filter from './components/filter'

const App = () => (
  <div className="App" >
    <Container>
      <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Filter />
        <ContactList />
      </Section>
    </Container>

  </div>
);

export default App;
