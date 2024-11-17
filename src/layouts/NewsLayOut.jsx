import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

export default function NewsLayOut() {
    return (
        <div className="container mx-auto">
            <div className="pb-16">
                <Header />
            </div>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-9">
                    <Outlet />
                </div>
                <div className="col-span-3 py-4">
                    <RightNav />
                </div>

            </div>
        </div>
    )
}
