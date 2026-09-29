import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function AppShell({
  children,
  products,
  onSelect,
  onAddProduct,
}) {
  return (
    <SidebarProvider className="flex flex-row">
      <AppSidebar
        products={products}
        onSelect={onSelect}
        onAddProduct={onAddProduct}
      />
      <main className="flex-1">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
