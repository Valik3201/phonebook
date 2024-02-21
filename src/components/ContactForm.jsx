import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations/operations';
import { selectContacts } from '../redux/selectors/contactsSelectors';
import ModalAlert from './ModalAlert';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Plus } from 'lucide-react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [existingName, setExistingName] = useState(null);
  const [existingPhone, setExistingPhone] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name === name || contact.phone === phone
    );

    if (!existingContact && !isInvalid) {
      setName('');
      setPhone('');

      dispatch(addContact({ name, phone }));
    } else {
      if (existingContact.name === name && existingContact.phone === phone) {
        setExistingName(name);
        setExistingPhone(phone);
        setIsModalOpen(true);
      } else if (existingContact.name === name) {
        setExistingName(name);
        setIsModalOpen(true);
      } else if (existingContact.phone === phone) {
        setExistingPhone(phone);
        setIsModalOpen(true);
      }
    }
  };

  const validatePhone = phone => phone.match(/^[0-9+\-() ]*$/);

  const isInvalid = useMemo(() => {
    if (phone === '') return false;

    return validatePhone(phone) ? false : true;
  }, [phone]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-8">
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Input
            type="text"
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            variant="bordered"
            isRequired
            size="sm"
          />
          <Input
            type="tel"
            label="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            variant="bordered"
            isRequired
            isInvalid={isInvalid}
            errorMessage={isInvalid && 'Please enter a valid phone number'}
            color={isInvalid && 'danger'}
            size="sm"
          />
        </div>

        <Button
          type="submit"
          className="bg-blue-600 text-white"
          endContent={<Plus className="w-5 h-5" />}
        >
          Add Contact
        </Button>
      </form>

      <ModalAlert
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setExistingName(null);
          setExistingPhone(null);
        }}
        existingName={existingName}
        existingPhone={existingPhone}
      />
    </>
  );
};

export default ContactForm;
