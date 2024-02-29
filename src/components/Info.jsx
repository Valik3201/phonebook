import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/contacts/selectors';
import { User } from '@nextui-org/react';

const Info = () => {
  const { user } = useAuth();

  const items = useSelector(selectVisibleContacts);

  return (
    <>
      <h2 className="text-xl font-bold leading-tight tracking-tight md:text-3xl">
        Welcome, {user.name}
      </h2>
      <User
        name={user.name}
        description={user.email}
        showFallback
        avatarProps={{
          size: 'lg',
        }}
      />
      <div>
        {items.length === 0 ? (
          <p>You don't have any contacts yet.</p>
        ) : (
          <p>
            You have {items.length}{' '}
            {items.length === 1 ? 'contact' : 'contacts'}.
          </p>
        )}
      </div>
    </>
  );
};

export default Info;
