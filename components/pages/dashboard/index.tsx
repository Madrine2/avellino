import Sidebar from "@/components/dashboard/sidebar/sidebar";
import Navbar from "@/components/dashboard/navbar/navbar";

const Dashboard =({children, admin, title})=>{
    return (
        <div>
            <div>
                <Sidebar/>
            </div>

            <div>
                <Navbar admin={admin} title={title}/>
                {children}
            </div>
        </div>
    )
}
export default Dashboard;