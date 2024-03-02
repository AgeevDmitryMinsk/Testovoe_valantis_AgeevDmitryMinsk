import { RouteObject } from 'react-router-dom';

export type AppRoutes =
    | 'main'
    | 'products'
    | 'forbidden'
    | 'not_found';

export type AppRouteObject = RouteObject;