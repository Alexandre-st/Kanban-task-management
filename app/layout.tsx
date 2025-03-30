import { ReactNode } from "react";
import { SidebarProvider } from "./contexts/LayoutContext";
import { ThemeProvider } from "./contexts/ThemeContext";


const Layout = ({children}: { children: ReactNode }) => {
    return (
        <ThemeProvider defaultTheme="system" storageKey="theme">
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default Layout;