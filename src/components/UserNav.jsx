import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { NavbarItem, Button } from '@nextui-org/react';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <NavbarItem>
      <Button onClick={() => dispatch(logOut())} color="danger" variant="flat">
        Logout
      </Button>
    </NavbarItem>
  );
};
