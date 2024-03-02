import { ProductsPaginationSchema } from '../model/types/productsPaginationSchema';

export const initialState: ProductsPaginationSchema = {
    limit: 50,
    page: 1,
    totalPages: 0,
    isLoading: false,
    error: '',
};