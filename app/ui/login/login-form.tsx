'use client'


import { Button } from "@material-tailwind/react";
import { Link } from "@mui/material";
import TextField from '@mui/material/TextField';
import * as React from 'react';


export default function LoginForm() {
 
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='flex flex-col items-center justify-center'>
         <h1 className='text-3xl font-bold'>Sign in to your account</h1>
         <h4 className='text-sm text-blue-400 underline mb-8'>or start your free 14-day trial</h4>
         <div className='flex flex-col mb-4 mt-4 gap-4'>
         <TextField className='w-60' label="Email" color="secondary" focused />
         <TextField label="Password" color="secondary" focused />
         </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4' >
      <Button className="h-12 w-60 items-center gap-3 text-color-black"
        color="purple">Sign In</Button>
      <Button 
        variant="outlined"
        color="blue-gray"
        className=" h-12 w-60 flex items-center gap-3"
      >
        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>

      <h6>Need an account? <Link href='/createaccount'>Sign Up Here</Link></h6>
      </div>
    </div>
  )
}
 