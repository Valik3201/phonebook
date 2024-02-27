import { NavbarItem, Link } from '@nextui-org/react';

export const AuthNav = () => {
  return (
    <>
      <NavbarItem>
        <Link
          href="/login"
          color="foreground"
          className="hover:text-blue-600 hover:opacity-100"
        >
          Login
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          href="/register"
          color="foreground"
          className="hover:text-blue-600 hover:opacity-100"
        >
          Sign Up
        </Link>
      </NavbarItem>
    </>
  );
};
