import { lazy } from 'react';

export const ProductsPageAsync = lazy(() =>
    import('./ProductsPage').then((module) => ({ default: module.ProductsPage }))
);
