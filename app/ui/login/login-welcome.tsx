import React from 'react';


export default function LoginWelcome() {
  return (
    <div className='w-50 flex' style={{ minHeight: '95vh' }}>
      <div
        style={{
            backgroundImage: 'linear-gradient(180deg, #db53e3 0%, #b137ac 30%, #9750c0 66%, #592998 100%)',
        }}
      >
        <div className='m-12 text-white'>
          <h1 className='text-5xl'>Welcome to Pidge!</h1>
          <h3>Document Faster. Learn Faster</h3>
        </div>
        <div className='ml-12 text-2xl text-white'>
          <p className='mb-10'>
            Create Document flows without <br /> ever leaving your browser
          </p>
          <p className='mb-10'>Reduce onboarding time</p>
          <p className='mb-10'>AI powered flow tracking</p>
        </div>
      </div>
  
    </div>
  );
}
