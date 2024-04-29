import LoginWelcome from '@/app/public/components/login/login-welcome';
import LoginForm from '@/app/public/components/login/login-form';


export default function Page() {
  return (
    <main className="p-0 m-0 flex" style={{minHeight:'100vh'}}>
      <div className="w-1/2">
        <LoginWelcome />
      </div>
      <div className="w-1/2">
        <LoginForm />
      </div>
    </main>
  );
}
