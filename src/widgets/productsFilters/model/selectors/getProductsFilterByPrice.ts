// import { StateSchema } from '@/app/providers/StoreProvider';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsFilterByPrice = (state: StateSchema) =>
    state.productsFilters?.filterPrice || initialState.filterPrice;
