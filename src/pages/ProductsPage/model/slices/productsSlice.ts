import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getProductsByIds } from '../services/getProductsByIds/getProductsByIds';
import { initialState } from '../../consts/initialState';
// import { Commodity } from '@/entities/Product';
import { Commodity } from '../../../../entities/Product';
import { getProductsIds } from '../services/getProductsIds/getProductsIds';

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProductsByIds.pending, (state) => {
                state.products = [];
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getProductsByIds.fulfilled, (state, action: PayloadAction<Commodity[]>) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getProductsByIds.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            // ===============================
            .addCase(getProductsIds.pending, (state) => {
                state.ids = [];
                state.products = [];
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getProductsIds.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.ids = action.payload;
                // state.isLoading = false;
            })
            .addCase(getProductsIds.rejected, (state, action) => {
                // state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
