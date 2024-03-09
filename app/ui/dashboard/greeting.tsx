import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Greeting() {
    return (
        <div style={{display: "flex"}}>
            <Avatar style={{ width: '6rem', height: '6rem', borderRadius: '50%' }} >
                <AvatarImage src="" />
                <AvatarFallback>KM</AvatarFallback>
            </Avatar>
            <div className='ml-6'>
            <h2 className="scroll-m-20 border-b pb-2 text-6xl font-semibold tracking-tight first:mt-0  ">
                     Hello, Kyle.
            </h2>
            <h2 className='text-m color-grey-100'>
                Welcome to your dashboard
            </h2>
            </div>
        </div>

    )
}
