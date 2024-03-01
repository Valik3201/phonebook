import PropTypes from 'prop-types';
import { NavbarItem, NavbarMenuItem, Link } from '@nextui-org/react';

export const AuthNav = ({ as }) => {
  const NavComponent = as === 'NavbarMenuItem' ? NavbarMenuItem : NavbarItem;

  return (
    <>
      <NavComponent>
        <Link
          href="/login"
          color="foreground"
          className="hover:text-blue-600 hover:opacity-100"
        >
          Login
        </Link>
      </NavComponent>
      <NavComponent>
        <Link
          href="/register"
          color="foreground"
          className="hover:text-blue-600 hover:opacity-100"
        >
          Sign Up
        </Link>
      </NavComponent>
    </>
  );
};

AuthNav.propTypes = {
  as: PropTypes.oneOf(['NavbarItem', 'NavbarMenuItem']),
};
