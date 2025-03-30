import { createFileRoute } from '@tanstack/react-router';
import {Moon, Sun} from "lucide-react";
import {useTheme} from "../contexts/ThemeContext";

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    const {theme, setTheme} = useTheme();

    return (
        <div className="p-2">
            <h3>Welcome Home!!!</h3>
            {theme === 'dark' ? (
                <div className='themeColor' onClick={() => setTheme('light')}>
                    <Sun strokeWidth={1} />
                </div>
            ) : (
                <div className='themeColor' onClick={() => setTheme('dark')}>
                    <Moon strokeWidth={1} />
                </div>
            )}
        </div>
    )
}