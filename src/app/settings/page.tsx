import {SideNav} from "@/components/SideNav";
import Settings from "@/components/Settings";

export default function DashboardPage() {
    return (
        <div className="app-container">
            <SideNav/>
            <div className="centered-container">
                <Settings/>
            </div>
        </div>
    )
}