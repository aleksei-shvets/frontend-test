import { configureStore } from '@reduxjs/toolkit';
import filterSlise from './filterSlise.js';

export default configureStore({
  reducer: {
    filter: filterSlise,
  },
});
