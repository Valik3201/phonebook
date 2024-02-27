import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from '@nextui-org/react';
import Logo from './Logo';

const { ThemeSwitcher } = require('./ThemeSwitcher');

const Navigation = () => {
  return (
    <>
      <Navbar isBordered>
        <NavbarBrand>
          <Link href="/" color="foreground">
            <Logo />
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/contacts">Contacts</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} href="/login" variant="flat">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="/register" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>

          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="container mx-auto md:max-w-xl flex flex-col gap-4 p-4 md:p-8 md:pt-4">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Navigation;
