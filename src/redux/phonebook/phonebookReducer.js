import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phonebookActions from './phonebookActions';

const items = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => [...state, payload],
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});