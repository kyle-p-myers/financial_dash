import { Filter } from "lucide-react"
import { Button } from "../../../../components/ui/button"

export function NotesFilter() {
  return (
   
    <Button variant={"outline"}  size={'sm'}>
      <Filter className="mr-2 h-4 w-4" /> Filters
    </Button>
  )
}
