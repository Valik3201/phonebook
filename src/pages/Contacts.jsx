import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import Info from 'components/Info';
import { Button, useDisclosure } from '@nextui-org/react';
import { Plus } from 'lucide-react';

const Contacts = () => {
  const [editingContact, setEditingContact] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleAddContact = () => {
    setEditingContact(null);
    onOpenChange(true);
  };

  const handleEditContact = contact => {
    setEditingContact(contact);
    onOpenChange(true);
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 py-4 md:py-8 md:pt-4 mb-24 sm:mb-0 px-6 md:px-0">
      <div className="flex flex-col gap-4">
        <Helmet>
          <title>Phonebook - Contacts</title>
        </Helmet>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-[1024px] mx-auto lg:px-6">
          <div className="flex flex-col gap-4 items-start">
            <Info />

            <Button
              onClick={handleAddContact}
              onOpen={onOpen}
              endContent={<Plus className="w-5 h-5" />}
              className="bg-blue-600 text-white w-full"
            >
              Add Contact
            </Button>
            <ContactForm
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              editingContact={editingContact}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Filter />
            <ContactList
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              onEditContact={handleEditContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
