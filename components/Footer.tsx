import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="contact" className="padding-container max-container pb-10">
      <div className="grid gap-12 border-t border-[#17392c]/15 py-12 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
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
          <p className="mt-5 max-w-[220px] text-sm leading-6 text-[#647068]">
            Decouvrez la Cote d Ivoire avec celles et ceux qui la vivent.
          </p>
        </div>
        {FOOTER_LINKS.map((column) => (
          <div key={column.title}>
            <h4 className="mb-5 font-bold text-[#17392c]">{column.title}</h4>
            <ul className="space-y-3 text-sm text-[#647068]">
              {column.links.map((link) => <li key={link}><Link href="#">{link}</Link></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="mb-5 font-bold text-[#17392c]">{FOOTER_CONTACT_INFO.title}</h4>
          <div className="space-y-3 text-sm text-[#647068]">
            {FOOTER_CONTACT_INFO.links.map((link) => (
              <p key={link.label}>{link.value}</p>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            {SOCIALS.links.slice(0, 3).map((link) => (
              <Image key={link} src={link} alt="" width={20} height={20} />
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-[#17392c]/15 pt-6 text-center text-xs text-[#647068]">2026 Bia — Tous droits reserves</p>
    </footer>
  )
}

export default Footer
