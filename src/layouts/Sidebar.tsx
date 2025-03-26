import { NotebookTabs } from "lucide-react";

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            Sidebar
            <div className="content">
                <NotebookTabs />
                Hide Sidebar
            </div>
        </aside>
    );
};