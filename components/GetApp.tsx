const GetApp = () => {
  return (
    <section className="padding-container max-container py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-[#d96f32] px-7 py-14 text-white sm:px-12 lg:px-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[48px] border-[#f6a623]/30" />
        <div className="relative z-10 max-w-[650px]">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#ffe4a8]">Votre prochain voyage</p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">
            La Cote d Ivoire vous attend.
          </h2>
          <p className="mt-5 max-w-[520px] text-lg leading-8 text-white/80">
            Recevez des suggestions personnalisees et preparez votre itineraire avec nos experts locaux.
          </p>
          <button type="button" className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-[#17392c]">
            Commencer a planifier
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetApp
