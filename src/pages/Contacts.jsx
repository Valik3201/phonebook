import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Contacts = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto md:max-w-xl flex flex-col gap-4 p-4 md:p-8 md:pt-4">
      <div className="flex flex-col gap-4">
        <Helmet>
          <title>Phonebook - Contacts</title>
        </Helmet>

        <h2 className="text-xl font-bold leading-tight tracking-tight md:text-3xl mb-6">
          Welcome, {user.name}
        </h2>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
