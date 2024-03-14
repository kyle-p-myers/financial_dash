'use client'
import { Link } from '@mui/material';
import { auth } from '@/app/lib/firebase/firebaseConfig';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


export default function Page() {
  const form = useForm();

  const SignUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
        console.error('Error in user Credential');
        return;
      }
      const token = credential.accessToken;
      const user = result.user;
      console.log(user, token);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }

};
  
  return (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: 'linear-gradient(to bottom, #8e9eab, #eef2f3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className=' backdrop-blur-xl bg-white/20 flex flex-col items-center justify-center p-32 rounded-xl shadow-2xl'>
        <h1 className=" text-black text-center text-7xl pb-16">Pidge</h1>
        <h3 className='text-black text-center text-3xl pb-3'>Join The Flock</h3>
        <h2 className='text-black text-center text-xl pb-6'>Learn Faster. Document Faster.</h2>
        <button
          type="button"
          onClick={SignUpWithGoogle}
          className="mb-6 flex rounded px-8 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: '#4D8BFF' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
          &nbsp; <Link className='text-black' href='/dashboard'> Sign up with Google </Link>
        </button>
        <div className='flex flex-col items-center justify-center mt-5'>
        <h5>Already have an Account?</h5> <Button asChild>
      <Link href="/login" className='mt-6 bg-purple-600'>Login</Link>
    </Button>
      </div>
      </div>
    </div>

       
  );
}
