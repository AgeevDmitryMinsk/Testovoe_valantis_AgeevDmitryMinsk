// import {Commodity } from '@/entities/Product';
import {Commodity } from '../../../../entities/Product';

export const getUniqProducts = (array: Commodity[]) => {
    const set = new Set();
    const result: Commodity[] = [];

    array.forEach((item) => {
        if (set.has(item.id)) {
            return;
        }

        result.push(item);
        set.add(item.id);
    });

    return result;
};
