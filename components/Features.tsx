import { FEATURES } from '@/constants'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="overflow-hidden bg-[#17392c] py-24 text-white">
      <div className="padding-container max-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#f6a623]">A chaque etape</p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">Voyagez avec confiance.</h2>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[28px] bg-white/10 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="bg-[#17392c] p-8 lg:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a623]">
                  <Image src={feature.icon} alt="" width={24} height={24} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features
