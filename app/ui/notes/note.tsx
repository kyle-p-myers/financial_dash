import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@material-tailwind/react"

export interface CardWithFormProps {
  title: string;
  content: string;
  onDelete: () => void;
}

export function Note({ title, content, onDelete }: CardWithFormProps) {
  return (
    <Card className="w-[350px] gap-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
      {content}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive" onClick={onDelete}>Delete</Button>
      </CardFooter>
    </Card>
  )
}
