// import { StateSchema } from '@/app/providers/StoreProvider';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsTotalPages = (state: StateSchema) =>
    state.productsPagination?.totalPages || initialState.totalPages;
