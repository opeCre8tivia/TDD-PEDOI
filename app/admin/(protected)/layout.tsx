import { ReactNode } from "react"
import { AppSidebar } from "@/components/AppSideBar/AppSideBar"
import {SidebarProvider } from "@/components/ui/sidebar"
import TopBar from "@/components/TopBar/TopBar"
import { cookies } from "next/headers"
import { getAdminByToken } from "./action"

interface Props {
    children:ReactNode
}

const AdminMainLayout= async({children}:Props)=>{

    const cookieStore = cookies();
    const token = cookieStore.get("admin_token")?.value || "";
    const admin = await getAdminByToken(token);

    return (
  <div className="max-w-screen min-h-screen flex flex-row">
    <SidebarProvider>
      <div className="w-64">
        <AppSidebar />
      </div>
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
       { admin && <TopBar admin={admin} />}
        <main className="flex-1 bg-gray-50 p-10">
          {children}
        </main>
      </div>
    </SidebarProvider>
  </div>
);
}

export default AdminMainLayout