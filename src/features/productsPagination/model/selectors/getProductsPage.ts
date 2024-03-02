// import { StateSchema } from '@/app/providers/StoreProvider';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsPage = (state: StateSchema) =>
    state.productsPagination?.page || initialState.page;
