import {combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { reducer as booksListReducer } from './BooksListRedux'

import rootSaga from '../Saga/'

const sagaMiddleware = createSagaMiddleware()

const AppReducer = combineReducers({
    booksList: booksListReducer
})

const rootReducer=(state, action)=>{
    return AppReducer(state, action);
} 

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )


sagaMiddleware.run(rootSaga)

export default store