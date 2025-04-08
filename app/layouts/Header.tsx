import { Link } from "@tanstack/react-router";
import {useUser} from "../contexts/UserContext";

export const Header = () => {
    const user = useUser();
    // https://tanstack.com/router/v1/docs/framework/react/examples/start-supabase-basic?path=examples/react/start-supabase-basic/src/routes/signup.tsx
    return (
        <header className="header">
            <div>Kanban</div>
            {user ? (
                <>
                    <span className="mr-2">{user.email}</span>
                    <Link to="/logout">Logout</Link>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
            {/*<Link to="/login">Login</Link>*/}
        </header>
    );
}