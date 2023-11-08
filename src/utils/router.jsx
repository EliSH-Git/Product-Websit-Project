import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/layout/Header';
import Home from '../components/Home';

export const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

;
