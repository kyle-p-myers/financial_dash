import { CircleIcon } from 'lucide-react';
import React from 'react';


export default function LoginWelcome() {

  return (
    <div className='flex items-center justify-center' style={{ minHeight: '100vh', minWidth: '50vw', background: 'linear-gradient(to bottom, #c94b4b, #4b134f)' }}>
      <div className='text-white flex flex-col justify-start'> 
        <div className='flex items-center'> 
          <h1 className='text-5xl'>Welcome to Pidge!</h1>
          <img className="h-8 ml-2 mb-6" src="/pidge.png" alt="pidge logo" /> 
        </div>
        <h6 className='text-white text-xl mt-2 mb-10'>Document Faster. Learn Faster.</h6> 
        <ul className='text-lg text-white list-disc'>
          <li >Create Document flows without ever leaving your browser</li>
          <li>Reduce onboarding time</li>
          <li>AI powered flow tracking</li>
        </ul>
      </div>
    </div>
  );
};