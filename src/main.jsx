import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayout from './layout/RootLayout';
import './index.css';
import Home from './pages/homeSection/Home';
import TimeLine from './pages/timeline/TimeLine';
import Stats from './pages/stats/Stats';
import FriendDetails from './pages/friendDetails/FriendDetails';
import NotFound from './pages/notFound/NotFound';
import FriendsContext from './context/FriendsContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/timeline',
        element: <TimeLine/>
      },
      {
        path: '/stats',
        element: <Stats/>
      },
      {
        path: '/details/:id',
        element: <FriendDetails/>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContext>
      <RouterProvider router={router} />
    </FriendsContext>
  </StrictMode>,
);
