import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { DashboardPage } from '../pages/dashboard/DashboardPage';

export const router_config = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        }
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
