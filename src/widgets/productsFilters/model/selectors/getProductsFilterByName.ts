// import { StateSchema } from '@/app/providers/StoreProvider';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsFilterByName = (state: StateSchema) =>
    state.productsFilters?.filterName || initialState.filterName;
