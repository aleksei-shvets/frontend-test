import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sortType: '',
    filters: {},
    showedFilters: {},
  },
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setshowedFilters: (state, action) => {
      state.showedFilters = action.payload;
    },
  },
});

export const getSortType = (state) => state.filter.sortType;
export const getFilters = (state) => state.filter.filters;
export const getshowedFilters = (state) => state.filter.showedFilters;
export const { setFilters, setSortType, setshowedFilters } = filterSlice.actions;

export default filterSlice.reducer;
