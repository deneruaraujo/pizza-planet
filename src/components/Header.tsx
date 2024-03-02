import Image from "next/image";
import Link from "next/link";
import logo from "@/public/header/logo.svg"

export function Header() {
  return (
    <header>
      <h1 className="flex flex-col text-3xl gap-4 items-center bg-gradient-to-r from-red-950 via-pizza-dark-red to-red-950 py-7 select-none md:text-4xl xl:flex-row xl:justify-center xl:text-5xl">
        <Link href="#" className="w-36 animate-spin-slow">
          <Image
            src={logo}
            width={0}
            height={0}
            quality={100}
            alt="logo"
          />
        </Link>
        <Link href='#' className="text-transparent bg-clip-text bg-gradient-to-t from-pizza-dark-gold via-pizza-light-gold to-pizza-dark-gold">
          PIZZA PLANET
        </Link>
      </h1>
    </header>
  )
}