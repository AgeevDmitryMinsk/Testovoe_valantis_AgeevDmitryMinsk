import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/initialState';

export const productsFiltersSlice = createSlice({
    name: 'productsFilters',
    initialState,
    reducers: {
        changeFilterName: (state, action: PayloadAction<string>) => {
            state.filterName = action.payload;
        },
        changeFilterBrand: (state, action: PayloadAction<string>) => {
            state.filterBrand = action.payload;
        },
        changeFilterPrice: (state, action: PayloadAction<string>) => {
            state.filterPrice = action.payload;
        },
    },
});

export const { actions: productsFiltersActions } = productsFiltersSlice;
export const { reducer: productsFiltersReducer } = productsFiltersSlice;
