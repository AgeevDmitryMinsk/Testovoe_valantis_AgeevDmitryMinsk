import { memo } from 'react';
// import { classNames } from '@/shared/lib/classNames/classNames';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ProductsFilters.module.scss';
// import { Input } from '@/shared/ui/Input/Input';
import { Input } from '../../../../shared/ui/Input/Input';
// import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { ReducersList, useDynamicModule } from '../../../../shared/lib/hooks/useDynamicModule/useDynamicModule';
import {
    productsFiltersActions,
    productsFiltersReducer,
} from '../../model/slices/productsFiltersSlice';
import { useSelector } from 'react-redux';
// import { getProductsFilterByName } from '@/widgets/productsFilters';
import { getProductsFilterByName } from '../../../../widgets/productsFilters';
// import { getProductsFilterByBrand } from '@/widgets/productsFilters';
import { getProductsFilterByBrand } from '../../../../widgets/productsFilters';
// import { getProductsFilterByPrice } from '@/widgets/productsFilters';
import { getProductsFilterByPrice } from '../../../../widgets/productsFilters';
// import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
// import { VStack } from '@/shared/ui/Stack';
import { VStack } from '../../../../shared/ui/Stack';

interface ProductsFiltersProps {
    className?: string;
    onLoadPage: (page: number) => void;
}

const reducers: ReducersList = {
    productsFilters: productsFiltersReducer,
};

export const ProductsFilters = memo((props: ProductsFiltersProps) => {
    const { className, onLoadPage } = props;
    const dispatch = useAppDispatch();
    const productsFilterByName = useSelector(getProductsFilterByName);
    const productsFilterByBrand = useSelector(getProductsFilterByBrand);
    const productsFilterByPrice = useSelector(getProductsFilterByPrice);

    const onChangeFilterBrand = (brand: string) => {
        dispatch(productsFiltersActions.changeFilterBrand(brand));
        onLoadPage(1);
    };

    const onChangeFilterHasName = (name: string) => {
        dispatch(productsFiltersActions.changeFilterName(name));
        onLoadPage(1);
    };

    const onChangeFilterPrice = (price: string) => {
        dispatch(productsFiltersActions.changeFilterPrice(price));
        onLoadPage(1);
    };

    useDynamicModule({ reducers });

    return (
        <VStack gap='16' className={classNames(cls.productsFilters, {}, [className])}>
            <h3 className={cls.header}>Фильтры</h3>
            <Input label='Имя' value={productsFilterByName} onChange={onChangeFilterHasName} />
            <Input label='Бренд' value={productsFilterByBrand} onChange={onChangeFilterBrand} />
            <Input label='Цена' value={productsFilterByPrice} onChange={onChangeFilterPrice} />
        </VStack>
    );
});