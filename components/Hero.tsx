import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container px-4 pb-16 pt-4 lg:px-20">
      <div className="ivory-hero relative min-h-[620px] overflow-hidden rounded-[32px] lg:min-h-[680px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#10291f]/95 via-[#10291f]/55 to-transparent" />
        <div className="relative z-10 flex min-h-[620px] max-w-[620px] flex-col justify-center px-7 py-16 text-white lg:min-h-[680px] lg:px-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#f6a623]" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f6a623]">Cote d Ivoire</p>
          </div>
          <h1 className="max-w-[600px] text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-[82px]">
            Vivez la route, <span className="text-[#f6a623]">pas seulement</span> la destination.
          </h1>
          <p className="mt-7 max-w-[480px] text-lg leading-8 text-white/80">
            De la lagune EbriE aux panoramas du Mont Nimba, voyagez autrement avec des adresses choisies par ceux qui la connaissent.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button type="button" title="Explorer les lieux" variant="btn_orange" />
            <button type="button" className="rounded-full border border-white/50 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm">
              Voir les itineraires
            </button>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <div className="flex -space-x-3">
              {['/person-1.png', '/person-2.png', '/person-3.png'].map((src) => (
                <Image key={src} src={src} alt="Voyageur" width={44} height={44} className="rounded-full border-2 border-white" />
              ))}
            </div>
            <div>
              <p className="font-bold">+12 000 voyageurs</p>
              <p className="mt-1 text-sm text-white/65">ont deja explore avec Bia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero