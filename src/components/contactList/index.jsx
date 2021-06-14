import { connect } from 'react-redux'
import ContactItem from '../contactItem'
import phonebookActions from '../../redux/phonebook/phonebookActions'
import style from './contactList.module.css'

const ContactList = ({ contacts, onDelete }) => (
  <ul className={style.contactList}>
    {
      contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))
    }
  </ul >
)

const getFilteredContacts = (allContacts, filter) => {
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter)
})

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => dispatch(phonebookActions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);