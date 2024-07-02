import Link from "next/link";

function Header({ title }: { title: string }) {
    return (
        <header className="bg-cyan-400 flex justify-between px-5 py-2 items-center mb-4">
            <h1 className="text-5xl font-bold uppercase ">{title}</h1>
            <nav className="border-l-2 p-3">
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"todo"}>Todo</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
