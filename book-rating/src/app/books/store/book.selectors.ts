import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../shared/book';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooksLoading = createSelector(
  selectBookState,
  state => state.loading
);

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
);

// only an example
export const selecsFirstTitle = createSelector(
  selectBooks,
  state => state.length ? state[0].title : '?'
);

// only an example: computed selector
export const selectBookViaIsbn = createSelector(
  selectBooks,
  (state: Book[], props) => state.find(b => b.isbn === props.isbn)
);