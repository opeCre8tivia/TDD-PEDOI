import { ReactNode } from "react"
import { AppSidebar } from "@/components/AppSideBar/AppSideBar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

interface Props {
    children:ReactNode
}

const AdminMainLayout=({children}:Props)=>{

    return (
    
      <div className="max-w-screen min-h-screen flex flex-row">
    <SidebarProvider>
       <div className="w-64">
          <AppSidebar />
       </div>
     
      <main className="flex-1 bg-gray-50 p-10">
        {children}
      </main>
    </SidebarProvider>
  </div>
 
    )
}

export default AdminMainLayout