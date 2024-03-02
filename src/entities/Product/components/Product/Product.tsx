import { memo } from 'react';
// import { classNames } from '@/shared/lib/classNames/classNames';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Product.module.scss';
// import { Commodity } from '@/entities/Product';
import { Commodity } from '../../model/types/Commodity';

interface ProductProps {
    className?: string;
    product: Commodity;
}

export const Product = memo((props: ProductProps) => {
    const { className, product } = props;

    return (
        <div className={classNames(cls.product, {}, [className])}>
            <div>ID - {product.id}</div>
            <div>Название - {product.product}</div>
            <div>Бренд - {product.brand}</div>
            <div>Цена - {product.price}</div>
        </div>
    );
});