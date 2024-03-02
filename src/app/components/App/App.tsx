// import { AppRouter } from '@/app/providers/router/components/AppRouter/AppRouter';
// import { AppRouter } from '../../../app/providers/router/components/AppRouter/AppRouter';
import { AppRouter } from '../../providers/router';

import { memo } from 'react';

export const App = memo(() => {
    return (
        <div className={'app'}>
            <AppRouter />
        </div>
    );
});
