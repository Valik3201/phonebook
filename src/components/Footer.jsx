import { Link } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full bg-white dark:bg-black p-6 border-t border-divider backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70">
      <div className="md:flex md:items-center md:justify-between max-w-[1024px] mx-auto px-6">
        <span className="text-sm text-gray-500 md:text-center dark:text-gray-400">
          © 2024 PhoneBook
        </span>
        <ul className="flex flex-wrap font-light items-center gap-4 mt-3 text-sm md:mt-0">
          <li>
            <Link
              href="https://github.com/Valik3201/goit-react-hw-08-phonebook"
              isExternal
              showAnchorIcon
              underline="hover"
              size="sm"
              className="text-gray-500 dark:text-gray-400 hover:opacity-100"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://connections-api.herokuapp.com/docs"
              isExternal
              showAnchorIcon
              underline="hover"
              size="sm"
              className="text-gray-500 dark:text-gray-400 hover:opacity-100"
            >
              API
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Valik3201"
              isExternal
              showAnchorIcon
              underline="hover"
              size="sm"
              className="text-gray-500 dark:text-gray-400 hover:opacity-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
