import { useAuth } from 'hooks';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserNav';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import Logo from './Logo';

const { ThemeSwitcher } = require('./ThemeSwitcher');

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/" color="foreground">
          <Logo />
        </Link>
      </NavbarBrand>

      {isLoggedIn && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/contacts">Contacts</Link>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        {isLoggedIn ? <UserMenu /> : <AuthNav />}

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
