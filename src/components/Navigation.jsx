import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@nextui-org/react';
import Logo from './Logo';

const { ThemeSwitcher } = require('./ThemeSwitcher');

const Navigation = () => {
  return (
    <>
      <Navbar isBordered>
        <NavbarBrand>
          <Link to="/">
            <Logo />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem></NavbarItem>
          <NavbarItem>
            <Link to="/contacts">Contacts</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link to="/login">
              <Button variant="flat">Login</Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/register">
              <Button variant="flat">Sign Up</Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto md:max-w-xl flex flex-col gap-4 p-4 md:p-8 md:pt-4">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default Navigation;
