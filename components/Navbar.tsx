import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" aria-label="Bia, accueil" className="flex items-center gap-3">
        <Image
          src="/bia-mark.svg"
          alt=""
          width={40}
          height={40}
          priority
          className="h-10 w-10 rounded-xl shadow-sm"
        />
        <span className="flex flex-col leading-none">
          <span className="text-[25px] font-extrabold tracking-[-0.06em] text-[#17392c]">bia</span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#647068]">Cote d'Ivoire</span>
        </span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <button type="button" className="rounded-full bg-[#17392c] px-6 py-3 text-sm font-bold text-white">
          Planifier mon voyage
        </button>
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar