import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Contacts = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>Phonebook - Contacts</title>
      </Helmet>

      <h2 className="text-4xl text-center font-semibold mb-6">
        Welcome, {user.name} 😁
      </h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
