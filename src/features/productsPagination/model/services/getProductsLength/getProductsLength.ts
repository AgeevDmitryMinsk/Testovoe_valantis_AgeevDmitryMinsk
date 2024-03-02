import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ThunkConfig } from '../../../../../app/providers/StoreProvider';
// import { getProductsLimit } from '@/features/productsPagination';
import { getProductsLimit } from '../../../../../features/productsPagination';
// import { getProductsIdsQuery } from '@/entities/Product';
import { getProductsIdsQuery } from '../../../../../entities/Product';

export const getProductsLength: any = createAsyncThunk<number, void, ThunkConfig<string>>(
    'products/getProductsLength',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch, getState } = thunkApi;

        const productsLimit = getProductsLimit(getState());

        try {
            const { result: productsIds } = await dispatch(
                getProductsIdsQuery({ limit: Infinity, offset: 0 })
            ).unwrap();

            if (!productsIds) {
                return rejectWithValue('Сервер не вернул данные');
            }

            // console.log(productsIds.length);

            return Math.ceil(productsIds.length / productsLimit);
        } catch (error) {
            const dsa = dispatch(getProductsLength());
            // return dispatch(getProductsLength());
            if (dsa.type.includes('fulfilled')) {
                return dispatch(dsa);
            }
            return rejectWithValue('error');
        }
    }
);
