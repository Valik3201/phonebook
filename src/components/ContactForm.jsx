import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import { selectContacts } from '../redux/contacts/selectors';
import ModalAlert from './ModalAlert';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Plus } from 'lucide-react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [existingName, setExistingName] = useState(null);
  const [existingNumber, setExistingNumber] = useState(null);

  const validatePhone = phone => phone.match(/^[0-9+\-() ]*$/);

  const isInvalid = useMemo(() => {
    if (number === '') return false;

    return validatePhone(number) ? false : true;
  }, [number]);

  const handleSubmit = event => {
    event.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );

    if (!existingContact && !isInvalid) {
      setName('');
      setNumber('');

      dispatch(addContact({ name, number }));
    } else {
      if (existingContact.name === name && existingContact.number === number) {
        setExistingName(name);
        setExistingNumber(number);
        setIsModalOpen(true);
      } else if (existingContact.name === name) {
        setExistingName(name);
        setIsModalOpen(true);
      } else if (existingContact.number === number) {
        setExistingNumber(number);
        setIsModalOpen(true);
      }
    }
  };

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
            value={number}
            onChange={e => setNumber(e.target.value)}
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
          setExistingNumber(null);
        }}
        existingName={existingName}
        existingNumber={existingNumber}
      />
    </>
  );
};

export default ContactForm;
