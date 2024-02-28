import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/contacts/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selectors';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from '@nextui-org/react';
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
import { Trash2Icon, PencilIcon } from 'lucide-react';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const sortedContacts = items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDelete = id => dispatch(deleteContact(id));

  const handleEdit = contact => {
    setSelectedContact(contact);
    onOpen();
  };

  return (
    <>
      <Table
        aria-label="Contacts"
        selectionMode="single"
        defaultSelectedKeys={['2']}
        isHeaderSticky
        classNames={{
          base: 'max-h-[480px] overflow-scroll',
        }}
      >
        <TableHeader>
          <TableColumn className="w-2/5">NAME</TableColumn>
          <TableColumn className="w-2/5">PHONE</TableColumn>
          <TableColumn className="w-1/5 text-center">ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={'No contacts to display.'}>
          {isLoading && !error && (
            <TableRow>
              <TableCell aria-colspan={3} colSpan={3} className="text-center">
                <Spinner />
              </TableCell>
              <TableCell className="hidden"></TableCell>
              <TableCell className="hidden"></TableCell>
            </TableRow>
          )}
          {error && (
            <TableRow>
              <TableCell
                aria-colspan={3}
                colSpan={3}
                className="text-center text-danger"
              >
                {error}
              </TableCell>
              <TableCell className="hidden"></TableCell>
              <TableCell className="hidden"></TableCell>
            </TableRow>
          )}

          {!isLoading &&
            sortedContacts.map(contact => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.number}</TableCell>
                <TableCell className="flex gap-1 items-center">
                  <Button
                    color="default"
                    variant="light"
                    size="sm"
                    onClick={() => handleEdit(contact)}
                    isIconOnly
                    startContent={<PencilIcon className="w-4 h-4" />}
                  />
                  <Button
                    color="danger"
                    variant="light"
                    size="sm"
                    onClick={() => handleDelete(contact.id)}
                    isIconOnly
                    startContent={<Trash2Icon className="w-4 h-4" />}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit contact
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  autoFocus
                  label="Name"
                  value={selectedContact ? selectedContact.name : ''}
                  variant="bordered"
                  isRequired
                  size="sm"
                />
                <Input
                  type="tel"
                  label="Phone"
                  value={selectedContact ? selectedContact.number : ''}
                  variant="bordered"
                  isRequired
                  size="sm"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactList;
