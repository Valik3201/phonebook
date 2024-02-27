import { NavbarItem, Button, Link } from '@nextui-org/react';

export const AuthNav = () => {
  return (
    <>
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
    </>
  );
};
