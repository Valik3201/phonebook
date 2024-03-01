import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../redux/contacts/operations';
import { selectContacts } from '../redux/contacts/selectors';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@nextui-org/react';

const Form = ({ isOpen, onOpenChange, editingContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setNumber(editingContact.number);
    } else {
      setName('');
      setNumber('');
      setMessage('');
    }
  }, [editingContact]);

  const validatePhone = phone => phone.match(/^[0-9+\-() ]*$/);

  const isInvalid = useMemo(() => {
    if (number === '') return false;

    return validatePhone(number) ? false : true;
  }, [number]);

  const handleSubmit = event => {
    const filteredContacts = contacts.filter(
      contact => !editingContact || contact.id !== editingContact.id
    );

    const existingContact = filteredContacts.find(
      contact => contact.name === name || contact.number === number
    );

    if (!existingContact && !isInvalid) {
      if (editingContact) {
        dispatch(
          updateContact({
            contactId: editingContact.id,
            updatedData: {
              name,
              number,
            },
          })
        );
      } else {
        dispatch(addContact({ name, number }));
      }
      setName('');
      setNumber('');
      setMessage('');
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

    if (editingContact) {
      setName(editingContact.name);
      setNumber(editingContact.number);
    } else {
      setName('');
      setNumber('');
    }
    setMessage('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      hideCloseButton
    >
      <ModalContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <ModalHeader className="flex flex-col gap-1">
            {editingContact !== null ? 'Edit Contact' : 'Add Contact'}
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
              {editingContact !== null ? 'Save' : 'Add Contact'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

Form.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  editingContact: PropTypes.object,
};

export default Form;
