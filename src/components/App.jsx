import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NextUIProvider, Spinner } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRout';
import { RestrictedRoute } from './RestrictedRoute';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner
      label="Refreshing user..."
      color="default"
      labelColor="foreground"
      className="h-screen flex items-center justify-center"
    />
  ) : (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default App;
