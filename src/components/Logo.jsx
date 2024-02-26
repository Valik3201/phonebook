import { BookUserIcon } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <BookUserIcon className="w-6 h-6 text-blue-600" />
      <h1 className="text-xl font-medium">
        Phone<span className="text-blue-600">Book</span>
      </h1>
    </div>
  );
};

export default Logo;
