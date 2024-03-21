import MemberCard from "@/app/ui/teams/member-card";
import { Button } from "@/app/ui/button";
import MemberAvatar from "@/components/ui/member-avatar";
import { Icon } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function Page(){
    return (
    <>
    <p>Customers Page</p>
        <div>
            <MemberCard />
        </div>
    </>
    )
}