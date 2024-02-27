import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet-async';
import { Input, Button, Link } from '@nextui-org/react';
import { UserRoundIcon, EyeIcon, EyeOffIcon, KeyRoundIcon } from 'lucide-react';

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();
  const [isVisible, setIsVisible] = React.useState(false);
  const [value, setValue] = React.useState('');

  const validateEmail = value =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === '') return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
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
        <title>Phonebook - Sign In</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center md:mt-20">
        <div className="rounded-lg shadow dark:border md:mt-0 w-4/5 mx-auto xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight md:text-3xl mb-6">
              Sign in to your account
            </h2>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col gap-4 md:gap-6"
            >
              <Input
                type="email"
                name="email"
                label="Your email"
                placeholder="Enter your email"
                value={value}
                isInvalid={isInvalid}
                color={isInvalid ? 'danger' : 'default'}
                errorMessage={isInvalid && 'Please enter a valid email'}
                onValueChange={setValue}
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                startContent={
                  <UserRoundIcon className="w-5 h-5 text-default-400 pointer-events-none flex-shrink-0" />
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
                Sign In
              </Button>

              {error && (
                <div className="text-sm font-light text-danger">
                  Incorrect email or password. Please try again.
                </div>
              )}

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  href="/register"
                  variant="flat"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
