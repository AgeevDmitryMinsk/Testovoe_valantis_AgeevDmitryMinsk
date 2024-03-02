import { memo } from 'react';
// import { classNames } from '@/shared/lib/classNames/classNames';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ProductsList.module.scss';
// import { Commodity } from '@/entities/Product';
import { Commodity } from '../../model/types/Commodity';
// import { HStack } from '@/shared/ui/Stack';
import { HStack } from '../../../../shared/ui/Stack';
import { Product } from '../Product/Product';

interface ProductsListProps {
    className?: string;
    products?: Commodity[];
    isLoading?: boolean;
    productsTotalPages: number;
}

export const ProductsList = memo((props: ProductsListProps) => {
    const { className, products, isLoading, productsTotalPages } = props;

    if (isLoading) {
        return <div className={cls.loader}>Loading...</div>;
    }

    if (!products || !products.length) {
        return null;
    }

    if (productsTotalPages < 1) {
        return <div className={cls.overlay}>Товаров нет</div>;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <h3 className={cls.header}>Товары</h3>
            <HStack Tag='section' wrap='wrap' gap='16' className={cls.products}>
                {products.map((product) => {
                    return <Product product={product} key={product.id} />;
                })}
            </HStack>
        </div>
    );
});
