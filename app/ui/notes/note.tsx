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

export interface CreateNoteProps {
  title: string;
  body: string;
}

export function Note({ title, body}: CreateNoteProps) {
  return (
    <Card className="w-[200px] h-[250px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className=" bg-rose-900 color-black h-1/2">{body}</CardContent>
      <CardFooter>
        <Button variant="destructive" >Delete</Button>
      </CardFooter>
    </Card>
  )
}
