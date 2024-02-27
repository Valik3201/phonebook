import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { Helmet } from 'react-helmet-async';
import { Input, Button, Link } from '@nextui-org/react';
import {
  UserRoundIcon,
  MailIcon,
  EyeIcon,
  EyeOffIcon,
  KeyRoundIcon,
} from 'lucide-react';

const Register = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <Helmet>
        <title>Phonebook - Sign Up</title>
      </Helmet>

      <div className="max-w-lg mx-auto mt-8 md:mt-16">
        <div className="rounded-lg shadow dark:border md:mt-0 w-4/5 mx-auto xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight md:text-3xl mb-6">
              Create and account
            </h2>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col gap-4 md:gap-6"
            >
              <Input
                name="name"
                label="Username"
                placeholder="Enter your username"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                startContent={
                  <UserRoundIcon className="w-5 h-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                startContent={
                  <MailIcon className="w-5 h-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                label="Password"
                name="password"
                placeholder="Enter your password"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                startContent={
                  <KeyRoundIcon className="w-5 h-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeIcon className="w-5 h-5 text-default-400 pointer-events-none" />
                    ) : (
                      <EyeOffIcon className="w-5 h-5 text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? 'text' : 'password'}
              />
              <Button type="submit" color="primary">
                Create an account
              </Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  href="/login"
                  variant="flat"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
