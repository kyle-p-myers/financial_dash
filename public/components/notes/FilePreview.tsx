'use client'

import { Badge } from "@/public/components/ui/badge"
import React from 'react'

export default function FilePreview() {
  return (
    <div className='relative bg-slate-50 h-40 w-40 m-4 shadow-xl flex border border-slate-400 rounded-sm'>
  <Badge className="absolute top-1 right-0 -mt-3 w-16 h-6 bg-violet-300 flex justify-center items-center font-light">View</Badge>
</div>

  )
}
