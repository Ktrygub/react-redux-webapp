import { createSelector } from 'reselect'
import { BOOKS_FETCHED, BOOK_CREATED } from '../../types'

const books = (state = {}, action = {}) => {
  switch (action.type) {
    case BOOKS_FETCHED:
    case BOOK_CREATED: 
      return { ...state, ...action.data.entities.books }
      
    default:
      return state
  }
}

export default books

// Selectors

export const booksSelector = state => state.books

export const allBooksSelector = createSelector(booksSelector, booksHash =>
  Object.values(booksHash)
)
