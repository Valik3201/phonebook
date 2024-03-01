import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { NavbarItem, NavbarMenuItem, Link } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export const UserMenu = ({ as }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const NavComponent = as === 'NavbarMenuItem' ? NavbarMenuItem : NavbarItem;

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <NavComponent>
      <Link
        onClick={handleLogout}
        color="danger"
        variant="light"
        className="cursor-pointer"
      >
        Logout
      </Link>
    </NavComponent>
  );
};

UserMenu.propTypes = {
  as: PropTypes.oneOf(['NavbarItem', 'NavbarMenuItem']),
};

export default UserMenu;
