import Link from "next/link";
import Image from "next/image";
import 'audioguida/styles/globals.css'
import "../styles/style.css"
import BackButton from "audioguida/components/BackButton";

export default function App({ Component, pageProps }) {
//  return <Component {...pageProps} />
return ( <div className="bg-white shadow">
<div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-4">
  <div className="flex justify-between items-center py-0 md:justify-start md:space-x-10">
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link href="/">
        <span className="flex items-center">
          <Image
            className="h-14 w-auto sm:h-14"
            src="/images/logo-villa-selvatico-scuro.png"
            width={300}
            height={100}
            alt="Logo"
          />
        </span>
      </Link>
    </div>
    <div className="-mr-2 -my-2">
      <button
        type="button"
        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-expanded="false"
      >
        <span className="sr-only">Open menu</span>
        {/* Icona per il menu */}
      </button>
    </div>
    <nav className="hidden md:flex space-x-10">
      {/* Link della navbar */}
    </nav>
    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
      <BackButton />
    </div>
  </div>
</div>
<Component {...pageProps} />
</div>
)
}
