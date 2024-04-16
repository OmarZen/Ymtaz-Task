// Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between h-16 bg-white font-Almarai font-bold">
            <div className="flex items-center">
                {/* Humbugar menu icon */}
                <div className="px-4">
                    <svg
                        className="w-6 h-6 text-black cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </div>
                

            </div>
            <div className="flex items-center flex-grow justify-center"> {/* Centering the list */}
                    <ul className="flex items-center">
                        <li className="px-4">
                            <Link href="/" className="text-[#2D4768] hover:text-gray-400">
                                سياسة الخصوصية
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link href="/" className="text-[#2D4768] hover:text-gray-400">
                                أرقام التشغيل
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link href="/about" className="text-[#2D4768] hover:text-gray-400">
                                اتصل بنا
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link href="/contact" className="text-[#2D4768] hover:text-gray-400">
                                من نحن
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link href="/privacy-policy" className="text-[#2D4768] hover:text-gray-400">
                                الرئيسية
                            </Link>
                        </li>
                    </ul>
                </div>
            <div className="flex items-center">
                <Link href="/" className="text-white font-bold text-2xl px-4">
                    <Image src="/image.png" alt="logo" width={70} height={70} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
