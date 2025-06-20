import { ReactNode } from "react"
import { AppSidebar } from "@/components/AppSideBar/AppSideBar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

interface Props {
    children:ReactNode
}

const AdminMainLayout=({children}:Props)=>{

    return (
        <div className="max-w-screen min-h-screen flex flex-col justify-start">
        <SidebarProvider>
          <AppSidebar/>
        
        <main className="bg-pink-400">
          {children}
        </main>
        </SidebarProvider>
        </div>
  
 
    )
}

export default AdminMainLayout