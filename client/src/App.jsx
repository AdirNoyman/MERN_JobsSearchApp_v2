import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  DashboardLayout,
  Error,
  Login,
  Register,
  AddJob,
  AllJobs,
  EditJob,
  Landing,
  Stats,
  Admin,
  DeleteJob,
  Profile,
} from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'dashboard', element: <DashboardLayout /> },
    ],
  },

  { path: '/addjob', element: <AddJob /> },
  { path: '/alljobs', element: <AllJobs /> },
  { path: '/editjob', element: <EditJob /> },
  { path: '/stats', element: <Stats /> },
  { path: '/admin', element: <Admin /> },
  { path: '/deletejob', element: <DeleteJob /> },
  { path: '/profile', element: <Profile /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
