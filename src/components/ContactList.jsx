import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/operations/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from '../redux/selectors/contactsSelectors';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const sortedContacts = items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <Table
      aria-label="Contacts"
      selectionMode="single"
      defaultSelectedKeys={['2']}
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
              <TableCell>{contact.phone}</TableCell>
              <TableCell className="text-center">
                <Button
                  color="danger"
                  variant="light"
                  size="sm"
                  startContent={<Trash2 className="w-4 h-4" />}
                  onClick={() => handleDelete(contact.id)}
                  className="hidden md:flex"
                >
                  Delete
                </Button>
                <Button
                  color="danger"
                  variant="light"
                  isIconOnly
                  onClick={() => handleDelete(contact.id)}
                  className="md:hidden"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ContactList;
