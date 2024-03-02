// import { StateSchema } from '@/app/providers/StoreProvider';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsLimit = (state: StateSchema) =>
    state.productsPagination?.limit || initialState.limit;