import { createRootRoute, Outlet } from '@tanstack/react-router';
import {Header} from "../layouts/Header.tsx";
import {Sidebar} from "../layouts/Sidebar.tsx";
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            {/*<div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
            </div>*/}
            {/*<hr/>*/}
            <Header />
            <Sidebar />
            <Outlet />
            {/*<TanStackRouterDevtools />*/}
        </>
    ),
});