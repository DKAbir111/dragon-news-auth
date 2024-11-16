import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="container mx-auto">
                <section className="py-3">
                    <Navbar />
                </section>
                <div className="py-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
