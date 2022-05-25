import { createStore } from 'redux';
import { ADD, REMOVE, DONE, FAVORITE } from './constants';

const initialState = {
  todos: [
    {
      text: 'Some text content',
      id: 1,
      done: false,
      favorite: false,
    },
  ],
};

const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.payload],
      };

    case REMOVE:
      return {
        todos: state.todos.filter((note) => note.id !== action.payload),
      };

    case DONE:
      const newToDoState = [...state.todos];
      const foundIndex = newToDoState.findIndex(
        (note) => note.id === action.payload
      );
      newToDoState[foundIndex] = {
        ...newToDoState[foundIndex],
        done: !newToDoState[foundIndex].done,
      };

      return {
        todos: newToDoState,
      };


    case FAVORITE:
      const NewFavorite = [...state.todos];
      const newIndex = NewFavorite.findIndex((note) => note.id === action.payload);
      NewFavorite[newIndex] = {
        ...NewFavorite[newIndex],
        favorite: !NewFavorite[newIndex].favorite,
      }

      return {
        todos: NewFavorite,
      }
      


    default:
      return state;
  }
};

export const store = createStore(noteReducer, initialState);
