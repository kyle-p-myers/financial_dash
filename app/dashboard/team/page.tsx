import MemberCard from "@/app/public/components/team/member-card";
import { Button } from "@/app/public/components/ui/button"
import MemberAvatar from "@/app/public/components/ui/member-avatar"
import { Icon } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function Page(){
    return (
    <>
    <div>Customers Page</div>
        <div>
            <MemberCard />
        </div>
    </>
    )
}