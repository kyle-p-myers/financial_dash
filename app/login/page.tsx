import styles from '@/app/ui/home.module.css'
import LoginWelcome from '../ui/login/login-welcome';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

export default function Page() {
  return (
    <main className="p-0 m-0">
      <div className='flex'>
      <div className='min-h-full p-0 m-0'>
      <LoginWelcome />
      </div>
      <div className='min-h-full'> 
      <LoginForm /> 
        <FormItem>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Use different settings for my mobile devices
                </FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <Link href="/examples/forms">mobile settings</Link> page.
                </FormDescription>
              </div>
            </FormItem>
      </div>
      </div>
      
    </main>
  );
}
