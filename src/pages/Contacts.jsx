import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Contacts = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto flex flex-col gap-4 py-4 md:py-8 md:pt-4">
      <div className="flex flex-col gap-4">
        <Helmet>
          <title>Phonebook - Contacts</title>
        </Helmet>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-[1024px] mx-auto lg:px-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold leading-tight tracking-tight md:text-3xl">
              Welcome, {user.name}
            </h2>
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
