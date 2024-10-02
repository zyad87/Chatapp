import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../assets/bg.jpg';

function ErrorPage() {
  return (
    <div className="relative w-full h-full min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"

      ></div>
      <body class="relative flex flex-col h-screen justify-center items-center ">
        <div class="flex flex-col items-center">
          <h1 class="text-[120px] font-extrabold text-gray-900">404</h1>
          <p class="text-2xl font-medium text-gray-900 mb-6">Page Not Found</p>
          <Link
            to={'../'}
            class="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
          >
            Go Home
          </Link>
        </div>
      </body>
    </div>
  );
}

export default ErrorPage;
