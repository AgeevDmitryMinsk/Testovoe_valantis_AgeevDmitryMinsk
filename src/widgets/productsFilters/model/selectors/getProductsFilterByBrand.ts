// import { StateSchema } from '@/app/providers/StoreProvider';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsFilterByBrand = (state: StateSchema) =>
    state.productsFilters?.filterBrand || initialState.filterBrand;
