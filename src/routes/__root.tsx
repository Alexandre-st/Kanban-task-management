import { createRootRouteWithContext, Outlet} from '@tanstack/react-router';
import {AuthContext} from "../contexts/AuthContext.tsx";
import { SidebarProvider } from "../contexts/LayoutContext.tsx";
import { ThemeProvider } from "../contexts/ThemeContext.tsx";
import { Header } from "../layouts/Header.tsx";
import { Sidebar } from "../layouts/Sidebar.tsx";
import { NotFound } from "../NotFound.tsx";
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

interface MyRouterContext {
    auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => (
        <ThemeProvider defaultTheme="system" storageKey="theme">
            <SidebarProvider>
                <Header />
                <Sidebar />
                <Outlet />
                {/*<TanStackRouterDevtools />*/}
            </SidebarProvider>
        </ThemeProvider>
    ),
    notFoundComponent: () => <NotFound />,
});
{/*<div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
            </div>*/}
{/*<hr/>*/}