import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

import { BooksListTypes } from '../Redux/BooksListRedux'

import { fetchBooksList } from './BooksListSaga'

const api = API.create()


export default function* root() {
  yield all([
    takeLatest(BooksListTypes.FETCH_BOOKS_LIST, fetchBooksList, api),
  ])
}

