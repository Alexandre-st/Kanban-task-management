// UserContext.tsx
import { createContext, useContext, ReactNode } from 'react'

// This is optional. If you know the exact shape from Supabase, define it more precisely
type User = {
    id: string;
    email?: string;
}

// The user can also be `null` if there's no logged-in user
export type UserContextType = User | null;

// 1. Create a context with a default of `null`:
export const UserContext = createContext<UserContextType>(null);

// 2. Wrap children in a provider
export const UserProvider = ({
                                 user,
                                 children,
                             }: {
    user: UserContextType
    children: ReactNode
}) => {
    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )
}

// 3. A convenience hook to consume the context
export function useUser() {
    return useContext(UserContext);
}
