import { put, call } from 'redux-saga/effects'
import booksListActions from '../Redux/BooksListRedux'

export function* fetchBooksList(api, action){
    let { response, error } = yield call(api.GET, `volumes?q=quilting`)
    if (response.ok) {
        yield put(booksListActions.saveBooksList(response.data.items))
    }
    else{
        console.log(error)
    }       
}