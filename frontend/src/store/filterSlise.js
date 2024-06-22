import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sortType: '',
    filters: {},
  },
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const getSortType = (state) => state.filter.sortType;
export const getFilters = (state) => state.filter.filters;
export const { setFilters, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
