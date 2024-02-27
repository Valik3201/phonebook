import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { NavbarItem, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <NavbarItem>
      <Button onClick={handleLogout} color="danger" variant="light">
        Logout
      </Button>
    </NavbarItem>
  );
};
