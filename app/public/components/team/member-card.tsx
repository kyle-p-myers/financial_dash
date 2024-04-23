import React from 'react'
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';
import MemberAvatar from '@/public/components/team/member-avatar';
import { Icon } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '../ui/button';

export default function MemberCard() {

return (

   
      <>
          <div className=" grid grid-rows-3 grid-cols-4 grid-flow-col bg-white drop-shadow-2xl rounded-sm w-2/5 h-32 p-2">
        <div className=" row-start-1 row-end-3 grid-col-1">
        <MemberAvatar />
        </div>
        <div className="col-span-2 row-start-1">
            <p className="text-xl mt-2">Kyle Myers</p>
        </div>
        <div className="grid-col-2 col-span-2">
            <p>Developer</p>
        </div>
        <div className="grid-col-2 row-start-3">
        <Button className="text-center bg-violet-400 h-8">Notes</Button>
        </div>
        <div className="grid-col-3 row-start-3">
        <Button className=" bg-violet-400 h-8 ">Profile</Button>
        </div>
        <div className="grid-col-4">
            <EditIcon className=" float-right"></EditIcon>
        </div>
        
    </div>
      </>
  )
}