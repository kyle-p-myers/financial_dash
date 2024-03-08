import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Greeting() {
    return (
        <div style={{display: "flex"}}>
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>KM</AvatarFallback>
            </Avatar>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ml-4">
                     Hello, Kyle.
            </h2>
        </div>

    )
}
