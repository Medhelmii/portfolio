function Badge({ children }) {
    return (
        <li className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm dark:bg-blue-950 dark:text-blue-300">
            {children}
        </li>
    )
}

export default Badge