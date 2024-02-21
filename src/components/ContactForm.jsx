import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import addContact operation and selectContacts selector from Redux
import { addContact } from '../redux/operations/operations';
import { selectContacts } from '../redux/selectors/contactsSelectors';

// Import ModalAlert component for displaying modal alerts
import ModalAlert from './ModalAlert';

// Import Input and Button components from NextUI
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

// Import Plus icon from lucide-react
import { Plus } from 'lucide-react';

/**
 * Component for adding contacts.
 * @returns {JSX.Element} The JSX element representing the contact form.
 */
const ContactForm = () => {
  // Redux dispatch function
  const dispatch = useDispatch();

  // Select contacts from Redux store
  const contacts = useSelector(selectContacts);

  // State for input fields and modal
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [existingName, setExistingName] = useState(null);
  const [existingPhone, setExistingPhone] = useState(null);

  /**
   * Handles form submission to add a new contact.
   * @param {object} event - The form submission event.
   * @returns {void}
   */
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

  // Function to validate phone number
  const validatePhone = phone => phone.match(/^[0-9+\-() ]*$/);

  // Memoized boolean indicating whether phone number is invalid
  const isInvalid = useMemo(() => {
    if (phone === '') return false;

    return validatePhone(phone) ? false : true;
  }, [phone]);

  return (
    <>
      {/* Contact form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-8">
        {/* Name and phone input fields */}
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

        {/* Submit button */}
        <Button
          type="submit"
          className="bg-blue-600 text-white"
          endContent={<Plus className="w-5 h-5" />}
        >
          Add Contact
        </Button>
      </form>

      {/* Modal alert for existing contact */}
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
