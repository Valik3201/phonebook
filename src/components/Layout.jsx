import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default Layout;
