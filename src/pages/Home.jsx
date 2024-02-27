import { Button, Link } from '@nextui-org/react';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 z-10 relative">
        <Link
          showAnchorIcon
          href="/contacts"
          anchorIcon={<ArrowRightIcon className="ml-2 w-4 h-4" />}
          className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 transition ease-in-out duration-250 hover:bg-blue-200 dark:hover:bg-blue-800"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
            New
          </span>
          <span className="text-sm font-medium">
            Edit Contacts Like Never Before
          </span>
        </Link>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Organize Your Contacts Effortlessly
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          With PhoneBook, organizing your contacts becomes a breeze. Seamlessly
          edit, update, and personalize your connections with unparalleled ease
          and efficiency. Say goodbye to chaos and hello to streamlined
          communication.
        </p>

        <Button
          href="/register"
          as={Link}
          color="primary"
          showAnchorIcon
          anchorIcon={<ChevronRightIcon className="w-5 h-5" />}
          variant="solid"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
        </Button>
      </div>
      <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
};

export default Home;
