import { useAuth } from 'hooks';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Contacts = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-4">
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
