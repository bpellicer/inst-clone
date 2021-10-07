import { useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";

export default function Dashboard(){
    useEffect(() => {
        document.title = 'Instagram';
    });

    return (
        <div className="bg-gray-100">
            <Header />
            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );
}