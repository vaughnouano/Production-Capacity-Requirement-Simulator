import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  //   SidebarMenu,
  //   SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  //   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CollapsibleFileTree } from "./CollapsibleFileTree";

export function AppSidebar() {
  //   const [open, setOpen] = React.useState(false);

  return (
    <Sidebar className="bg-neutral-50 px-3">
      {/*  */}
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex justify-start h-fit p-2"
            render={<Button variant="ghost" />}
          >
            <div></div>
            <div className="text-start">
              <p className="text-lg font-bold">Knowles</p>
              <p>Simulator</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Other Tools</DropdownMenuLabel>
              <DropdownMenuItem>Machine Health</DropdownMenuItem>
              <DropdownMenuItem>Cost Tracker</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
      {/*  */}
      <SidebarContent>
        {/*  */}
        <SidebarGroup>
          <SidebarGroupLabel>Product</SidebarGroupLabel>
          <CollapsibleFileTree />
        </SidebarGroup>
        {/*  */}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex gap-2 justify-start h-fit p-2"
            render={<Button variant="ghost" />}
          >
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-start">
              <p className="text-md font-bold">John Doe</p>
              <p>johndoe@gmail.com</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Profile</DropdownMenuLabel>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>log-out</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
