import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Contacts = () => {
  return (
    <div className="flex flex-col gap-4">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
