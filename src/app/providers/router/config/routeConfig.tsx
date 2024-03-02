// import { AppRouteObject, AppRoutes } from '@/shared/types/router';
import { AppRouteObject, AppRoutes } from '../../../../shared/types/router';
import { createBrowserRouter } from 'react-router-dom';
import {
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProducts,
} from '../../../../shared/consts/router';

import { Redirect } from '../components/Redirect/Redirect';
// import {NotFoundPage} from "@/pages/NotFoundPage/components/NotFoundPage";
import {NotFoundPage} from "../../../../pages/NotFoundPage/components/NotFoundPage";
// import {RootLayout} from "@/app/components/RootLayout";
import {RootLayout} from "../../../../app/components/RootLayout";
// import {ProductsPage} from "@/pages/ProductsPage";
import {ProductsPage} from "./../../../../pages/ProductsPage";
// import { ForbiddenPage } from '@/pages/ForbiddenPage';

const routeConfig: Record<AppRoutes, AppRouteObject> = {
    main: {
        path: getRouteMain(),
        element: <Redirect whereTo={getRouteProducts()} />,
    },
    products: {
        path: getRouteProducts(),
        element: <ProductsPage />,
    },
    forbidden: {
        path: getRouteForbidden(),
        // element: <ForbiddenPage />,
    },
    not_found: {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
        // element: <ProductsPage />,
    },
};

export const routes = Object.values(routeConfig).map((route) => {
    return route;
});

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: routes,
    },
]);