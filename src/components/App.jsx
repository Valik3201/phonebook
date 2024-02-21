import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ThemeSwitcher } from './ThemeSwitcher';

import { BookUserIcon } from 'lucide-react';

function App() {
  return (
    <div className="container mx-auto md:max-w-xl flex flex-col gap-4 p-4 md:p-8 md:pt-4">
      <ThemeSwitcher />
      <div className="flex flex-row gap-4 justify-center items-center md:pb-4">
        <BookUserIcon className="w-12 h-12 text-blue-600" />
        <h1 className="text-3xl md:text-6xl font-medium">
          Phone<span className="text-blue-600">Book</span>
        </h1>
      </div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
