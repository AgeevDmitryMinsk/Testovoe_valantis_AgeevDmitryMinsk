// import { StateSchema } from '@/app/providers/StoreProvider';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { initialState } from '../../consts/initialState';

export const getProductsIsLoading = (state: StateSchema) =>
    state.products?.isLoading || initialState.isLoading;
