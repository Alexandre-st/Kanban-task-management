import { Eye, Moon, NotebookTabs, Sun } from "lucide-react";
import { useSidebar } from "../contexts/LayoutContext";
import { useTheme } from "../contexts/ThemeContext";

export const Sidebar = () => {
    const {isOpen, toggleSidebar} = useSidebar();
    const {theme, setTheme} = useTheme();

    return (
        <aside className={`sidebar${isOpen ? ' open' : ''}`}>
            Sidebar
            {isOpen ? (
                <button type="button" className="content" onClick={toggleSidebar}>
                    <NotebookTabs />
                    Hide Sidebar
                </button>
            ) : (
                <button type="button" className="content" onClick={toggleSidebar}>
                    <Eye />
                </button>
            )}
            {theme === 'dark' ? (
                <div className='themeColor' onClick={() => setTheme('light')}>
                    <Sun strokeWidth={1} />
                </div>
            ) : (
                <div className='themeColor' onClick={() => setTheme('dark')}>
                    <Moon strokeWidth={1} />
                </div>
            )}
        </aside>
    );
};