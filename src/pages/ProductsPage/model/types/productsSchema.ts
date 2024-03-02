// import { Commodity } from '@/entities/Product';
import { Commodity } from '../../../../entities/Product';

export interface ProductsSchema {
    ids: string[];
    products?: Commodity[];
    isLoading: boolean;
    error?: string;
}
