import React from 'react';
import { Users } from '@/app/lib/definitions';
import MemberAvatar from '@/app/public/components/team/member-avatar';

import { Button } from '../ui/button';
import 'usercards.css'

interface MemberCardProps {
    user: Users;
}

export default function MemberCard({ user }: MemberCardProps) {
    const { name, email } = user;

    return (
        <div className="card">
            <div className="avatar">
                <MemberAvatar />
            </div>
            <div className="info">
                <p className="name">{name}</p>
                <p className="email">{email}</p>
            </div>
            <div className="actions flex gap-2">
                <Button className="notes bg-violet-400">Notes</Button>
                <Button className="profile bg-violet-400">Profile</Button>
            </div>
        </div>
    )
}
