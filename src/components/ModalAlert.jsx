import PropTypes from 'prop-types';

// Import Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, and Button components from NextUI
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

/**
 * Component for displaying modal alerts.
 * @param {object} props - Component props.
 * @param {boolean} props.isOpen - Determines whether the modal is open.
 * @param {function} props.onClose - Function to handle modal closing.
 * @param {string} [props.existingName] - Name of the existing contact (optional).
 * @param {string} [props.existingPhone] - Phone number of the existing contact (optional).
 * @returns {JSX.Element} The JSX element representing the modal alert.
 */
const ModalAlert = ({ isOpen, onClose, existingName, existingPhone }) => {
  // Initialize message variable
  let message = '';

  // Generate message based on existingName and existingPhone
  if (existingName && existingPhone) {
    message = (
      <>
        Contact with name <strong>{existingName}</strong> and phone{' '}
        <strong>{existingPhone}</strong> already exists!
      </>
    );
  } else if (existingName) {
    message = (
      <>
        Contact with name <strong>{existingName}</strong> already exists!
      </>
    );
  } else if (existingPhone) {
    message = (
      <>
        Contact with phone <strong>{existingPhone}</strong> already exists!
      </>
    );
  }

  return (
    // Modal component
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {/* Modal header */}
        <ModalHeader>Oppps...</ModalHeader>
        {/* Modal body */}
        <ModalBody>
          {/* Display message */}
          <p>{message}</p>
        </ModalBody>
        {/* Modal footer */}
        <ModalFooter>
          {/* Close button */}
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// Prop type validation
ModalAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  existingName: PropTypes.string,
  existingPhone: PropTypes.string,
};

export default ModalAlert;
