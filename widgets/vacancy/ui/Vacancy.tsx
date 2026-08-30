import Image from "next/image"

export default function Vacancy() {

  const vacansys = [
    {
      time: '10 min ago',
      logo: '/Logo (5).svg',
      title: 'Forward Security Director',
      desc: 'Bauch, Schuppe and Schulist Co',
    },
    {
      time: '12 min ago',
      logo: '/Logo (7).svg',
      title: 'Regional Creative Facilitator',
      desc: 'Wisozk - Becker Co',
    },
    {
      time: '15 min ago',
      logo: '/Logo (6).svg',
      title: 'Internal Integration Planner',
    },
  ]


  return (
    <section className="py-15">
      <div className="container">
        <div>
          <h1 className="text-black md:text-5xl text-3xl font-bold text-center md:text-left">Recent Jobs Available</h1>
          <div className="flex justify-between items-baseline">
            <p className="text-black md:mt-10 mt-5  text-center md:text-left">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
            <button className="text-[#309689] text-2xl border-b-2 border-[#309689] cursor-pointer font-semibold hover:text-[#65c1b4] transition-colors duration-300 ease-in-out hidden md:flex">View all</button>
          </div>
        </div>
        <div>
          <div className="md:mt-25 mt-15">
            {vacansys.map((vacansy) => (
              <div key={vacansy.title} className="bg-white shadow-[0_3px_8px_0_rgba(48,150,137,0.08)] p-6 md:p-10 rounded-3xl mb-6 hover:scale-101 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <p className="text-[#309689] bg-[#309689]/10 p-1 rounded-lg text-sm">{vacansy.time}</p>
                  <button>
                    <Image
                      src={'/Icon.svg'}
                      alt="favourites"
                      width={24}
                      height={24}
                      className="cursor-pointer hover:scale-108 transition-transform duration-300 ease-in-out"
                    />
                  </button>
                </div>

                <div className="mt-8 md:mt-15 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
                  <div className="flex">
                    <Image
                      src={vacansy.logo}
                      alt={vacansy.title}
                      width={40}
                      height={40}
                      className="shrink-0"
                    />
                    <div className="ml-5">
                      <h4 className="text-xl md:text-3xl font-semibold text-black">{vacansy.title}</h4>
                      <p className="text-black text-sm md:text-base">{vacansy.desc}</p>
                    </div>
                  </div>

                  <button className="bg-[#309689] text-white py-3.5 px-5 rounded-lg cursor-pointer font-semibold hover:bg-[#55bfb1] transition-colors duration-300 ease-in-out w-full md:w-auto">
                    Job details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}