import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import deleteContact and fetchContacts operations, and selector functions from Redux
import { deleteContact, fetchContacts } from '../redux/operations/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from '../redux/selectors/contactsSelectors';

// Import Table components from NextUI
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from '@nextui-org/react';

// Import Button component from NextUI and Trash2 icon from lucide-react
import { Button } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';

/**
 * Component for displaying the list of contacts.
 * @returns {JSX.Element} The JSX element representing the contact list.
 */
const ContactList = () => {
  // Redux dispatch function
  const dispatch = useDispatch();

  // Select items, isLoading, and error from Redux store
  const items = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Fetch contacts when component mounts
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Sort contacts alphabetically by name
  const sortedContacts = items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  /**
   * Handles contact deletion.
   * @param {string} id - The id of the contact to be deleted.
   * @returns {void}
   */
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
        {/* Display spinner if loading */}
        {isLoading && !error && (
          <TableRow>
            <TableCell aria-colspan={3} colSpan={3} className="text-center">
              <Spinner />
            </TableCell>
            <TableCell className="hidden"></TableCell>
            <TableCell className="hidden"></TableCell>
          </TableRow>
        )}

        {/* Display error message if there's an error */}
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

        {/* Display sorted contacts */}
        {!isLoading &&
          sortedContacts.map(contact => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell className="text-center">
                {/* Delete button (visible on desktop) */}
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

                {/* Delete button (visible on mobile) */}
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
