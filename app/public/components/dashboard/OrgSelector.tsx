import * as React from "react"
import { Bird } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function OrgSelector() {
  return (
    <Select>
      <SelectTrigger className="w-full border-none bg-gradient-to-r from-violet-500 to-purple-500">
      <Bird /> <SelectValue placeholder="Pidge" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Organization</SelectLabel>
          <SelectItem value="est">Aires</SelectItem>
          <SelectItem value="cst">Microsoft</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
