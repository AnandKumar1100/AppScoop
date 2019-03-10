import { createSelector } from 'reselect';

const selectBooksList = (state) => state.booksList;

const getBooksList = () => createSelector(
    selectBooksList,
    (booksList) => booksList.booksList
)

export {
    getBooksList
};