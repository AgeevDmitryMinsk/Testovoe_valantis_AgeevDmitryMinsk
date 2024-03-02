import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getFilteredProductsIdsQuery, getProductsIdsQuery } from '@/entities/Product';
import { getFilteredProductsIdsQuery, getProductsIdsQuery } from '../../../../../entities/Product';
// import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ThunkConfig } from '../../../../../app/providers/StoreProvider';
// import {
//     getProductsFilterByBrand,
//     getProductsFilterByName,
//     getProductsFilterByPrice,
// } from '@/widgets/productsFilters';
import {
    getProductsFilterByBrand,
    getProductsFilterByName,
    getProductsFilterByPrice,
} from '../../../../../widgets/productsFilters';
// import { getProductsLimit } from '@/features/productsPagination';
import { getProductsLimit } from '../../../../../features/productsPagination';

export const getProductsIds: any = createAsyncThunk<string[], number, ThunkConfig<string>>(
    'products/getProductsIds',
    async (pageNumber, thunkApi) => {
        const { rejectWithValue, dispatch, getState } = thunkApi;

        const productsFilterByBrand = getProductsFilterByBrand(getState());
        const productsFilterByName = getProductsFilterByName(getState());
        const productsFilterByPrice = getProductsFilterByPrice(getState());
        const productsLimit = getProductsLimit(getState());
        const offset = productsLimit * (pageNumber - 1);

        try {
            let productsIds;
            if (!productsFilterByBrand && !productsFilterByName && !productsFilterByPrice) {
                const { result } = await dispatch(
                    getProductsIdsQuery({ limit: productsLimit, offset })
                ).unwrap();

                productsIds = result;
            } else {
                const { result } = await dispatch(
                    getFilteredProductsIdsQuery({
                        filterBrand: productsFilterByBrand,
                        filterName: productsFilterByName,
                        filterPrice: productsFilterByPrice,
                    })
                ).unwrap();

                productsIds = result;
            }

            if (!productsIds) {
                return rejectWithValue('Сервер не вернул данные');
            }

            return productsIds;
        } catch (error) {
            const dsa: any = dispatch(getProductsIds(pageNumber));

            const promise: any = await dsa.unwrap();

            promise.catch(() => {
                return dispatch(getProductsIds(pageNumber));
            });

            return promise;
        }
    }
);
