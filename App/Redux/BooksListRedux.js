import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchBooksList: ['payload'],
  saveBooksList : ['booksList']
})

export const BooksListTypes = Types
export default Creators


export const INITIAL_STATE = Immutable({
    booksList: []
})
  
export const saveBooksList = (state, { booksList }) => {
  return state.merge({ booksList })
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_BOOKS_LIST]: saveBooksList,
})

