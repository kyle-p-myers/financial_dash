import React from 'react'


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/public/components/ui/select"

export default function NoteDeptSelect() {
  return (
    <div>
    <Select>
      <SelectTrigger className="w-[200px] shadow-xl">
        <SelectValue placeholder="Select a Department" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Department</SelectLabel>
          <SelectItem className='text-green' value="accounting">Accounting</SelectItem>
          <SelectItem value="development">Development</SelectItem>
          <SelectItem value="human-resources">Human Resources</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
