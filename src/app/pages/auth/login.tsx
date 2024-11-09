import React from 'react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Link to="/" className="bg-blue-500 text-lg text-white px-3 py-2 rounded">
        Login
      </Link>
    </div>
  );
};
