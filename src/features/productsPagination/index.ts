export { ProductsPagination } from './components/ProductsPagination/ProductsPagination';
export { getProductsLimit } from './model/selectors/getProductsLimit';
export { getProductsPage } from './model/selectors/getProductsPage';
export { getProductsTotalPages } from './model/selectors/getProductsTotalPages';
export {
    productsPaginationActions,
    productsPaginationReducer,
} from './model/slices/productsPaginationSlice';
export { getProductsLength } from './model/services/getProductsLength/getProductsLength';
export type { ProductsPaginationSchema } from './model/types/productsPaginationSchema';