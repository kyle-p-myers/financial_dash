import React from 'react';


export default function LoginWelcome() {
  return (
    <div className='flex flex-col items-center justify-center' style={{ minHeight: '100vh', minWidth: '50vw',
    background: 'linear-gradient(to bottom, #c94b4b, #4b134f)'}}
>
        <div className=' text-white'>
          <h1 className='flex text-5xl m '>Welcome to Pidge!</h1>
          <h3>Document Faster. Learn Faster</h3>
        </div>
        <div className=' flex flex-col text-2xl text-white'>
          <p className=' flex'>
            Create Document flows without <br /> ever leaving your browser
          </p>
          <p className='flex flex-col'>Reduce onboarding time</p>
          <p >AI powered flow tracking</p>
        </div>
      </div>
  
  );
}
