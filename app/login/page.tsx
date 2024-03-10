import LoginWelcome from '../ui/login/login-welcome';
import { ThemeProvider } from "@material-tailwind/react";
import LoginForm from '../ui/login/login-form';


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
