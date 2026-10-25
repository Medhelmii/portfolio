function Footer() {
    return (
        <footer className="border-t dark:border-gray-800 py-8 mt-20">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex gap-6">
                    <a href="https://github.com/Medhelmii" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-helmi-karoui-4341621a1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        LinkedIn
                    </a>
                    <a href="mailto:helmi.karoui1@gmail.com" className="hover:text-blue-600">
                        E-Mail
                    </a>
                </div>
                <p>© {new Date().getFullYear()} Mohamed Helmi Karoui</p>
            </div>
        </footer>
    )
}

export default Footer