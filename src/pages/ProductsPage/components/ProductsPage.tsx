// import { ProductsList } from '@/entities/Product';
import { ProductsList } from '../../../entities/Product';
// import { MainLayout } from '@/shared/layouts';
import { MainLayout } from '../../../shared/layouts';
import { memo, useEffect, useMemo } from 'react';
import { getProductsByIds } from '../model/services/getProductsByIds/getProductsByIds';
// import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
// import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { ReducersList, useDynamicModule } from '../../../shared/lib/hooks/useDynamicModule/useDynamicModule';
import { productsReducer } from '../model/slices/productsSlice';
import { useSelector } from 'react-redux';
import { getProducts } from '../model/selectors/getProducts';
// import {
//     ProductsPagination,
//     getProductsLength,
//     getProductsTotalPages,
//     productsPaginationReducer,
// } from '@/features/productsPagination';
import {
    ProductsPagination,
    getProductsLength,
    getProductsTotalPages,
    productsPaginationReducer,
} from '../../../features/productsPagination';
// import {
//     ProductsFilters,
//     getProductsFilterByBrand,
//     getProductsFilterByName,
//     getProductsFilterByPrice,
// } from '@/widgets/productsFilters';
import {
    ProductsFilters,
    getProductsFilterByBrand,
    getProductsFilterByName,
    getProductsFilterByPrice,
} from '../../../widgets/productsFilters';
import { getProductsIsLoading } from '../model/selectors/getProductsIsLoading';
// import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce/useDebounce';

const reducers: ReducersList = {
    products: productsReducer,
    productsPagination: productsPaginationReducer,
};

export const ProductsPage = memo(() => {
    const dispatch = useAppDispatch();
    const products = useSelector(getProducts);
    const productsIsLoading = useSelector(getProductsIsLoading);
    const productsTotalPages = useSelector(getProductsTotalPages);
    const productsFilterByBrand = useSelector(getProductsFilterByBrand);
    const productsFilterByName = useSelector(getProductsFilterByName);
    const productsFilterByPrice = useSelector(getProductsFilterByPrice);

    const isLoading = useMemo(() => {
        return productsIsLoading || products === undefined;
    }, [products, productsIsLoading]);

    const canShowPagination = useMemo(() => {
        if (isLoading) return false;
        if (!products?.length) return false;
        return !(productsFilterByBrand || productsFilterByName || productsFilterByPrice);

    }, [
        isLoading,
        products?.length,
        productsFilterByBrand,
        productsFilterByName,
        productsFilterByPrice,
    ]);

    const onLoadPage = useDebounce((page: number) => {
        dispatch(getProductsByIds(page));
        window.scrollTo(0, 0);
    }, 600);

    useEffect(() => {
        dispatch(getProductsLength());
        dispatch(getProductsByIds(1));
    }, [dispatch]);

    useDynamicModule({ reducers });

    return (
        <div>
            <MainLayout
                content={
                    <ProductsList
                        isLoading={isLoading}
                        products={products}
                        productsTotalPages={productsTotalPages}
                    />
                }
                filters={<ProductsFilters onLoadPage={onLoadPage} />}
                pagination={
                    <ProductsPagination canShowPagination={canShowPagination} onLoadPage={onLoadPage} />
                }
            />
        </div>
    );
});
