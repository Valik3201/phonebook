import { useSelector, useDispatch } from 'react-redux';

// Import setFilter action creator and selectFilter selector from Redux
import { setFilter } from '../redux/reducers/filterSlice';
import { selectFilter } from '../redux/selectors/contactsSelectors';

// Import Input component from NextUI and Search icon from lucide-react
import { Input } from '@nextui-org/react';
import { Search } from 'lucide-react';

/**
 * Component for filtering contacts.
 * @returns {JSX.Element} The JSX element representing the filter input.
 */
const Filter = () => {
  // Select current filter value from Redux store
  const filter = useSelector(selectFilter);
  // Redux dispatch function
  const dispatch = useDispatch();

  /**
   * Handles filter value change.
   * @param {object} event - The change event.
   * @returns {void}
   */
  const handleChange = event => {
    // Dispatch setFilter action with the new filter value
    dispatch(setFilter(event.target.value));
  };

  return (
    // Input field for filtering contacts
    <Input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChange}
      labelPlacement="outside"
      // Search icon as start content of the input field
      startContent={
        <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};

export default Filter;
