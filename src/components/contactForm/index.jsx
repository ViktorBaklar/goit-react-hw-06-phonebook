import { Component } from "react"
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebookActions'
import store from '../../redux/store';
import style from './contactForm.module.css'
import Input from '../UI/input'
import Button from '../UI/button'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = event => {
    const { name, number } = this.state
    const contacts = store.store.getState().contacts.items
    event.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {

    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п." />
        <label htmlFor="number">Number</label>
        <Input type="tel" name="number" value={this.state.number} onChange={this.handleChange} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +" />
        <Button type="submit">Add contact</Button>

      </form>
    );

  };

}
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name, number) => dispatch(phonebookActions.addContact(name, number))
  }
};

export default connect(null, mapDispatchToProps)(ContactForm);