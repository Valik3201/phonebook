import React from 'react';
import { useAuth } from 'hooks';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserNav';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import Logo from './Logo';

const { ThemeSwitcher } = require('./ThemeSwitcher');

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />

      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/"
            color="foreground"
            className="hover:text-blue-600 hover:opacity-100"
          >
            Home
          </Link>
        </NavbarItem>

        {isLoggedIn && (
          <NavbarItem>
            <Link
              href="/contacts"
              color="foreground"
              className="hover:text-blue-600 hover:opacity-100"
            >
              Contacts
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            href="/"
            color="foreground"
            className="hover:text-blue-600 hover:opacity-100"
          >
            Home
          </Link>

          {isLoggedIn && (
            <NavbarMenuItem>
              <Link
                href="/contacts"
                color="foreground"
                className="hover:text-blue-600 hover:opacity-100"
              >
                Contacts
              </Link>
            </NavbarMenuItem>
          )}

          {isLoggedIn ? (
            <UserMenu as="NavbarMenuItem" />
          ) : (
            <AuthNav as="NavbarMenuItem" />
          )}
        </NavbarMenuItem>
      </NavbarMenu>

      <ThemeSwitcher />
    </Navbar>
  );
};

export default Navigation;
