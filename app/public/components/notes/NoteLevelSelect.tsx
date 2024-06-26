import React from 'react'


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/app/public/components/ui/select"

export default function NoteLevelSelect() {
  return (
    <div>
    <Select>
      <SelectTrigger className="w-[200px] shadow-xl">
        <SelectValue placeholder="Select a Note Level" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Level</SelectLabel>
          <SelectItem className='text-green' value="personal">Personal</SelectItem>
          <SelectItem value="team">Team</SelectItem>
          <SelectItem value="organization">Organization</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
