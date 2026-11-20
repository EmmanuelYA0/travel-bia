import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import profilePic from "public/folded-map.svg"
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src={profilePic}
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section id="destinations" className="padding-container max-container py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#d96f32]">Incontournables</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#17392c] lg:text-6xl">Trois facettes.<br />Une seule Cote d Ivoire.</h2>
        </div>
        <button className="hidden rounded-full border border-[#17392c]/20 px-6 py-3 font-bold text-[#17392c] md:block">Toutes les destinations</button>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <DestinationCard image="/abidjan.png" place="Region des Lagunes" title="Abidjan" tag="Urbain" />
        <DestinationCard image="/assinie.png" place="Sud-Ouest" title="Assinie" tag="Plages" />
        <DestinationCard image="/comoe.png" place="Savanes du Nord" title="Comoe" tag="Nature" />
      </div>
    </section>
  )
}

const DestinationCard = ({ image, place, title, tag }: { image: string; place: string; title: string; tag: string }) => (
  <article className="group relative h-[440px] overflow-hidden rounded-[28px]">
    <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#10291f]/90 via-transparent to-transparent" />
    <span className="absolute right-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#17392c]">{tag}</span>
    <div className="absolute bottom-0 left-0 p-7 text-white">
      <p className="mb-2 text-sm text-white/70">{place}</p>
      <h3 className="text-4xl font-extrabold">{title}</h3>
    </div>
  </article>
)

export default Camp