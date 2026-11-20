import Image from 'next/image'

const Guide = () => {
  return (
    <section id="experience" className="bg-[#f5f0e6] py-24">
      <div className="padding-container max-container grid items-center gap-14 lg:grid-cols-2">
        <div className="relative min-h-[520px]">
          <Image src="/img-2.png" alt="Paysage de Cote d Ivoire" fill className="rounded-[32px] object-cover" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[24px] bg-white p-5 shadow-xl sm:right-auto sm:w-[320px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#d96f32]">Jour 3</p>
                <h3 className="mt-1 text-xl font-extrabold text-[#17392c]">Grand-Bassam</h3>
              </div>
              <span className="text-2xl font-bold text-[#17392c]">↗</span>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e8e2d5]">
              <div className="h-full w-3/4 rounded-full bg-[#d96f32]" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#d96f32]">Le guide Bia</p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#17392c] lg:text-6xl">
            Une immersion, pas juste une visite.
          </h2>
          <p className="mt-6 max-w-[560px] text-lg leading-8 text-[#647068]">
            Suivez des itineraires locaux qui relient les lieux emblematiques aux traditions, saveurs et rencontres qui donnent du sens au voyage.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-[#f6a623] pl-5">
              <strong className="text-3xl text-[#17392c]">31</strong>
              <p className="mt-1 text-sm text-[#647068]">regions a decouvrir</p>
            </div>
            <div className="border-l-2 border-[#d96f32] pl-5">
              <strong className="text-3xl text-[#17392c]">60+</strong>
              <p className="mt-1 text-sm text-[#647068]">experiences locales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
