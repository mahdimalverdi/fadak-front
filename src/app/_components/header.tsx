import Link from "next/link";

const Header = () => {
    return (<header className="bg-zinc-800 p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold"><Link href="/" className="hover:underline">
                <img src="/favicon/fadak-logo.png" alt="fadak-logo"
                     className="h-12 tracking-tighter leading-tight md:pr-8"/>
            </Link></div>
            <nav>
                <a href="/" className="hover:text-red-500 btn px-5 inline-block">خانه</a>
                <a href="/#meetings" className="hover:text-red-500 btn px-5 inline-block">مراسم‌ها</a>
                <a href="/#videos" className="hover:text-red-500 btn px-5 inline-block">‌نماهنگ‌ها</a>
                <a href="/live" className="hover:text-red-500 btn px-5 inline-block">پخش زنده</a>
            </nav>
        </div>
    </header>);
};

export default Header;
