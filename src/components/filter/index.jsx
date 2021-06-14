import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebookActions'
import style from './filter.module.css'
import Input from '../UI/input'

const Filter = ({ filter, onChange }) => (
  <form className={style.filter}>
    <label htmlFor="filter">Find contacts by name</label>
    <Input type="text" name="filter" value={filter} onChange={onChange} />
  </form>
)

const mapStateToProps = state => ({
  filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(phonebookActions.changeFilter(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);