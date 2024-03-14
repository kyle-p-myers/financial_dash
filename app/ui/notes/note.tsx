import React from 'react';

export default function Note(){
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 h-82 overflow-hidden">
      <h2 className="text-xl font-semibold mb-2 truncate">Note Title</h2>
      
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 mr-2" />
      
      <p className="text-gray-700 mb-4 line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <div className="flex items-center mb-4">
        <button className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M13 3a2 2 0 012 2v2.94l1.223-1.636a1 1 0 011.554 1.237l-2.95 3.94a1 1 0 01-1.554 0l-4.95-6.6a1 1 0 00-1.554 0L3 11.626V5a2 2 0 012-2h8zM5 17a2 2 0 002 2h6a2 2 0 002-2v-5.707l-1.354 1.807a3 3 0 01-4.636 0L6 10.293V17H5zm2.5-7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-500">3</span>
        </button>
        
        <button className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm12 4.414l-3 3V8h-1v4.414l-3-3V9.5L7 11v-1l1.5-1.5L10 11v1l-1.5 1.5L7 12.5v1l1.5-1.5L10 12v1l-1.5 1.5L7 14.5v1l3-3V14h1V9.414l3 3V11h1v4.586l3-3V9z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-500">2</span>
        </button>
        
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-500">4</span>
        </button>
      </div>
      
      <div className="flex items-center mb-4">
        <span className="px-2 py-1 bg-red-500 text-white rounded-md mr-2">High </span>
        <span className="px-2 py-1 bg-slate-300 text-black rounded-md">Sales</span>
      </div>
      
      <p className="text-sm text-gray-500">January 1, 2022 | 12:00 PM</p>
    </div>
  );
}

