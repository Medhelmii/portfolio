function Badge({ children }) {
    return (
        <li className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            {children}
        </li>
    )
}

export default Badge