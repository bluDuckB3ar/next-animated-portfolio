import Link from "next/link";


const links = [

    { url: "/about", title: "About" },
    { url: "/blog", title: "Blog" },
    { url: "/contact", title: "Contact" },
    { url: "/support", title: "Support" },
];


const StartPage = () => (
    <div className="flex h-screen flex-col justify-center overflow-hidden text-rachel bg-bear px-4 sm:px-8 md:px-12 lg:px-24 xl:px-42 ">
        <div className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2">
            <div className="grid grid-cols-2 gap-4 text-2xl">
                {links.map((link) => (
                    <Link key={link.title} href={link.url}>
                        <button
                            className={`border-8 p-10 border-rachel flex items-center justify-center w-full ${links.length === 1 ? "w-1/2" : ""
                                } bg-bear text-rachel hover:bg-rachel hover:text-bear focus:bg-rachel focus:text-bear`}
                        >

                            {link.title}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);
export default StartPage




