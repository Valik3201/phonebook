import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ThemeSwitcher } from './ThemeSwitcher';

import { BookUserIcon } from 'lucide-react';

// Functional component representing the main application
function App() {
  return (
    // Container for the entire application with flex layout
    <div className="container mx-auto md:max-w-xl flex flex-col gap-4 p-4 md:p-8 md:pt-4">
      {/* ThemeSwitcher component for theme switching */}
      <ThemeSwitcher />

      {/* Header section with application title and icon */}
      <div className="flex flex-row gap-4 justify-center items-center md:pb-4">
        {/* BookUserIcon for application icon */}
        <BookUserIcon className="w-12 h-12 text-blue-600" />
        {/* Title of the application */}
        <h1 className="text-3xl md:text-6xl font-medium">
          Phone<span className="text-blue-600">Book</span>
        </h1>
      </div>

      {/* ContactForm component for adding new contacts */}
      <ContactForm />
      {/* Filter component for filtering contacts */}
      <Filter />
      {/* ContactList component for displaying contacts */}
      <ContactList />
    </div>
  );
}

// Export the App component as the default export
export default App;
