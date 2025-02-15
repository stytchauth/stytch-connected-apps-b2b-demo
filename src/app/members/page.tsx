import {SideNav} from "@/components/SideNav";
import Members from "@/components/Members";

export default function DashboardPage() {
    return (
        <div className="app-container">
            <SideNav/>
            <div className="centered-container">
                <Members/>
            </div>
        </div>
    )
}