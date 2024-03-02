import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { getProductsLength } from '@/features/productsPagination';
import { getProductsLength } from '../../../../features/productsPagination';
import { initialState } from '../../consts/initialState';

export const productsPaginationSlice = createSlice({
    name: 'productsPagination',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getProductsLength.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductsLength.fulfilled, (state, action: PayloadAction<number>) => {
                state.totalPages = action.payload;
                state.isLoading = false;
            })
            .addCase(getProductsLength.rejected, (state, action) => {
                state.error = String(action.payload);
                state.isLoading = false;
            });
    },
});

export const { actions: productsPaginationActions } = productsPaginationSlice;
export const { reducer: productsPaginationReducer } = productsPaginationSlice;
