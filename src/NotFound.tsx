export function NotFound({children}: { children?: never }) {
    return (
        <div className="">
            <div className="">
                {children || <p>The page you are looking for does not exist.</p>}
            </div>
            <p className="">
                <button
                    onClick={() => window.history.back()}
                    className=""
                >
                    Go back
                </button>
            </p>
        </div>
    )
}