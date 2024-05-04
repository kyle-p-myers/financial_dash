import { Download, Upload } from "lucide-react"
import { Button } from "../../../../components/ui/button"

export function NotesExport() {
  return (
    <Button variant={"outline"} size={'sm'}>
      <Upload className="mr-2 h-4 w-4" /> Export
    </Button>
   
  )
}
