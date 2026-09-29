import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CollapsibleFileTree } from "./CollapsibleFileTree";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/ui/field";

export function AppSidebar({ products, onSelect, onAddProduct }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleConfirm = () => {
    if (!name.trim()) return;
    onAddProduct?.(name);
    setName("");
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleConfirm();
    }
  };

  return (
    <Sidebar className="bg-neutral-50 px-3">
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

      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-2">
          <div className="flex justify-between">
            <SidebarGroupLabel>Product</SidebarGroupLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger render={<Button variant="ghost" />}>
                Add
              </PopoverTrigger>
              <PopoverContent className="p-4 py-7">
                <PopoverHeader>
                  <Field>
                    <Label>Product Name</Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                    <Button onClick={handleConfirm}>Confirm</Button>
                  </Field>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </div>
          <CollapsibleFileTree products={products} onSelect={onSelect} />
        </SidebarGroup>
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
