import React from 'react'
import styles from '@/postcss.config'


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/app/public/components/ui/select"

export default function NotePrioritySelector() {
  return (
    <div>
    <Select>
      <SelectTrigger className="w-[200px] shadow-xl">
        <SelectValue placeholder="Select a Note Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem className='hover:bg-green-500' value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
