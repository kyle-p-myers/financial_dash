import { Trash2 } from "lucide-react"
 import { Button } from "../ui/button"


export function NotesDelete() {
  return (
    <Button variant={"outline"}  size={'sm'}>
      <Trash2 className="mr-2 h-4 w-4" /> Delete
    </Button>
  )
}
