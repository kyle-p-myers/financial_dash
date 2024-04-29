import React from 'react';
import MemberCard from "@/app/public/components/team/member-card";
import { users } from '@/app/lib/placeholder-data';

export default function Page(){
    return (
        <>
            <div>Customers Page</div>
            <div className='grid grid-cols-2'>
                {users.map((user) => (
                    <MemberCard key={user.id} user={user} />
                ))}
            </div>
        </>
    )
}
