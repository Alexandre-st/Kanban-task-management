import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <main className="layout">
            <div>
                <h3>Welcome Home!</h3>
            </div>
        </main>
    )
}