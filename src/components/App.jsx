import { Routes, Route, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Home from 'pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';
import Layout from './Layout';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
