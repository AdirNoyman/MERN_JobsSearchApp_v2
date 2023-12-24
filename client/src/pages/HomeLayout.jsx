import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      {/* Layout = children (pages) */}
      <Outlet />
    </>
  );
};

export default HomeLayout;
