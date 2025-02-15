import {Dashboard} from "@/components/Dashboard";
import {SideNav} from "@/components/SideNav";

export default function DashboardPage() {
    return (
        <div className="app-container">
            <SideNav/>
            <div className="centered-container">
                <Dashboard/>
            </div>
        </div>
    )
}