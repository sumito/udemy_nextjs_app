import Head from "next/head"
import Link from "next/link"

export default function Layout({children,title = "HP by Nextjs"}){
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className="bg-gray-800 w-screen h-14">
                    <div className="flex space-x-4">
                        <Link href="/">
                           <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            Home
                            </p> 
                        </Link>
                        <Link href="/blog-page">
                           <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            Blog
                            </p> 
                        </Link>
                        <Link href="/contact-page">
                           <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            Contact
                            </p> 
                        </Link>
                    </div>

                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
            {children}
            </main>
            <footer className="w-full h-12 flex justify-center items-center border-t">
                <a
                  className="flex items-center"
                  href="http://vercel.com?um_source=create-next-app&utm_?medium=default-template"

                  >
                    Powerd by {" "}
                    <img src="/vercel.svg" alt="Vercel Log" className="h-4 ml-2" />

                </a>
            </footer>
        </div>
    );
}