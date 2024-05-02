import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/app/public/components/ui/card"
  

export default function NotesCard() {
  return (
    <div>
      <Card className='w-auto gap-4'>
  <CardHeader>
    <CardTitle>Personal Notes</CardTitle>
    <CardDescription>600 Notes</CardDescription>
  </CardHeader>
  </Card>
    </div>
  )
}