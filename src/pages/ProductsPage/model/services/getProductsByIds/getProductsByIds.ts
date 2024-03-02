import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getProductsByIdsQuery, Commodity } from '@/entities/Product';
import { getProductsByIdsQuery, Commodity } from '../../../../../entities/Product';
// import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ThunkConfig } from '../../../../../app/providers/StoreProvider';
import { getUniqProducts } from '../../../lib/helpers/getUniqProducts';

// import { productsPaginationActions } from '@/features/productsPagination';
import { productsPaginationActions } from '../../../../../features/productsPagination';
import { getProductsIds } from '../getProductsIds/getProductsIds';
import { getProductsIds as getProductsIdsSelector } from '../../selectors/getProductsIds';

export const getProductsByIds: any = createAsyncThunk<Commodity[], number, ThunkConfig<string>>(
    'products/getProductsByIds',
    async (pageNumber, thunkApi) => {
        const { rejectWithValue, dispatch, getState } = thunkApi;

        try {
            await dispatch(getProductsIds(pageNumber));
            const productsIds = getProductsIdsSelector(getState());

            if (!productsIds) {
                return rejectWithValue('Сервер не вернул данные');
            }

            const { result: products } = await dispatch(getProductsByIdsQuery(productsIds)).unwrap();

            if (!products) {
                return rejectWithValue('Сервер не вернул данные');
            }

            const uniqProducts: Commodity[] = getUniqProducts(products);

            dispatch(productsPaginationActions.changePage(pageNumber));
            return uniqProducts;
        } catch (error) {
            const dsa = dispatch(getProductsByIds(pageNumber));
            // return dispatch(getProductsByIds(pageNumber));
            if (dsa.type.includes('fulfilled')) {
                return dsa;
            }
            // return rejectWithValue('error');
        }
    }
);
