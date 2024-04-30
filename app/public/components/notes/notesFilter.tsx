import { Mail } from "lucide-react"
import { Button } from "../ui/button"

export function NotesFilter() {
  return (
   
    <Button variant={"outline"}  size={'sm'}>
      <Mail className="mr-2 h-4 w-4" /> Filter
    </Button>
  )
}
