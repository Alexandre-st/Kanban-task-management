import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return (
        <main className="main">
            <h3>Welcome Home!!!</h3>
        </main>
    )
}