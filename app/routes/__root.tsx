import {
    HeadContent,
    Link,
    Outlet,
    Scripts,
    createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { createServerFn } from '@tanstack/react-start';
import { ReactNode } from "react";
import { DefaultCatchBoundary } from '../components/DefaultCatchBoundary';
import { NotFound } from '../components/NotFound';
import { SidebarProvider } from "../contexts/LayoutContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Header } from "../layouts/Header";
import { Sidebar } from "../layouts/Sidebar";
// import appCss from '../styles/app.css?url'
import { seo } from '../utils/seo';
import { getSupabaseServerClient } from '../utils/supabase';
import '../styles/index.scss';

// @ts-ignore
const fetchUser = createServerFn({ method: 'GET' }).handler(async () => {
    const supabase = getSupabaseServerClient();
    const { data, error: _error } = await supabase.auth.getUser();

    if (!data.user?.email) {
        return null
    }

    return data.user;
})

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            ...seo({
                title:
                    'TanStack Start | Type-Safe, Client-First, Full-Stack React Framework',
                description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
            }),
        ],
        links: [
            { rel: 'stylesheet' }, // A rajouter le href du build href: appCss, il y a aussi un import spécifique
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png',
            },
            // { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
            { rel: 'icon', href: '/favicon.ico' },
        ],
    }),
    beforeLoad: async () => {
        const user = await fetchUser();

        return {
            user,
        }
    },
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        )
    },
    notFoundComponent: () => <NotFound />,
    component: RootComponent,
})

function RootComponent() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="theme">
            <SidebarProvider>
                <RootDocument>
                    <Header />
                    <Sidebar />
                    <Outlet />
                </RootDocument>
            </SidebarProvider>
        </ThemeProvider>
    )
}

function RootDocument({ children }: { children: ReactNode }) {
    const { user } = Route.useRouteContext()

    return (
        <html>
        <head>
            <HeadContent />
        </head>
        <body className="layout">
        {/*<div className="p-2 flex gap-2 text-lg">*/}
        {/*    <Link*/}
        {/*        to="/"*/}
        {/*        activeProps={{*/}
        {/*            className: 'font-bold',*/}
        {/*        }}*/}
        {/*        activeOptions={{ exact: true }}*/}
        {/*    >*/}
        {/*        Home*/}
        {/*    </Link>{' '}*/}
            {/*<Link*/}
            {/*    to="/posts"*/}
            {/*    activeProps={{*/}
            {/*        className: 'font-bold',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Posts*/}
            {/*</Link>*/}
        {/*    <div className="ml-auto">*/}
        {/*        {user ? (*/}
        {/*            <>*/}
        {/*                <span className="mr-2">{user.email}</span>*/}
        {/*                <Link to="/logout">Logout</Link>*/}
        {/*            </>*/}
        {/*        ) : (*/}
        {/*            <Link to="/login">Login</Link>*/}
        {/*        )}*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<hr />*/}
        {/*<ThemeProvider defaultTheme="system" storageKey="theme">*/}
        {/*    <SidebarProvider>*/}
                {children}
        {/*<Layout children={children} />*/}
        {/*    </SidebarProvider>*/}
        {/*</ThemeProvider>*/}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
        </body>
        </html>
    )
}