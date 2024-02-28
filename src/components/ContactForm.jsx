import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import { selectContacts } from '../redux/contacts/selectors';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@nextui-org/react';
import { Plus } from 'lucide-react';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
      onOpenChange(false);
    } else {
      if (
        existingContact &&
        existingContact.name === name &&
        existingContact.number === number
      ) {
        setMessage(
          `Contact with name ${name} and phone ${number} already exists!`
        );
      } else if (existingContact && existingContact.name === name) {
        setMessage(`Contact with name ${name} already exists!`);
      } else if (existingContact && existingContact.number === number) {
        setMessage(`Contact with phone ${number} already exists!`);
      }
    }
  };

  const closeModal = () => {
    onOpenChange(false);
    setName('');
    setNumber('');
    setMessage('');
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-blue-600 text-white w-full"
        endContent={<Plus className="w-5 h-5" />}
      >
        Add Contact
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <ModalHeader className="flex flex-col gap-1">
              Add Contact
            </ModalHeader>
            <ModalBody>
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
              {message && <div className="text-sm text-danger">{message}</div>}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={closeModal}>
                Close
              </Button>
              <Button type="submit" color="primary">
                Add Contact
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
