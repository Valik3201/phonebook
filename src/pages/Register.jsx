import React from 'react';
import { Input, Button } from '@nextui-org/react';
import {
  UserRoundIcon,
  MailIcon,
  EyeIcon,
  EyeOffIcon,
  KeyRoundIcon,
} from 'lucide-react';

const Register = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <h2 className="text-4xl text-center font-semibold mb-6">Sign Up</h2>
      <form className="flex flex-col gap-6">
        <Input
          type="text"
          label="Username"
          placeholder="Enter your username"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          startContent={
            <UserRoundIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          startContent={
            <KeyRoundIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
        />
        <Button type="submit" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
