"use client"

import {Users,LayoutDashboard } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon:LayoutDashboard,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
  }

]

export function AppSidebar() {

  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" className="w-64 bg-white">
      <SidebarContent >
        <SidebarGroup className="bg-white min-h-full">
          <SidebarGroupLabel className="text-lg mb-6">
            <h1 className="text-gray-800 font-bold text-center">Pedoi Dashboard</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`flex items-center gap-2 px-2 py-1 rounded transition-colors ${
                        pathname === item.url
                          ? "text-primary bg-primary/10 font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}