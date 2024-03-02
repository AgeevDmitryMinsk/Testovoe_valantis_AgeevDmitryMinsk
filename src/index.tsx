import { createRoot } from 'react-dom/client';
// import '';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/providers/router';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
