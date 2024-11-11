import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterKorisnikaRequest, FilterZadatakaRequest } from '../../types/request-types';

export type FilterState = {
  korisniciTableFilter: Partial<FilterKorisnikaRequest>;
  zadaciTableFilter: Partial<FilterZadatakaRequest>;
};

const initialState: FilterState = {
  korisniciTableFilter: {},
  zadaciTableFilter: {}
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterKorisnici: (state, action: PayloadAction<Partial<FilterKorisnikaRequest>>) => {
      state.korisniciTableFilter = {
        ...state.korisniciTableFilter,
        ...action.payload
      };
    }
  },
});

export const { setFilterKorisnici } = filterSlice.actions;
export default filterSlice.reducer;
