import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { User } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/contacts/selectors';

const Contacts = () => {
  const { user } = useAuth();

  const items = useSelector(selectVisibleContacts);

  return (
    <div className="container mx-auto flex flex-col gap-4 py-4 md:py-8 md:pt-4 mb-24 sm:mb-0 px-6 md:px-0">
      <div className="flex flex-col gap-4">
        <Helmet>
          <title>Phonebook - Contacts</title>
        </Helmet>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-[1024px] mx-auto lg:px-6">
          <div className="flex flex-col gap-4 items-start">
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
            <ContactForm />
          </div>
          <div className="flex flex-col gap-4">
            <Filter />
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
