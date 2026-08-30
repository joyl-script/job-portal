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
      desc: 'Mraz, Quigley and Feest Inc.',
    },
  ]



  return (
    <section className="py-15">
      <div className="container">
        <div>
          <h1 className="text-black text-5xl font-bold">Recent Jobs Available</h1>
          <div className="flex justify-between items-baseline ">
            <p className="text-black mt-10">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
            <button className="text-[#309689] text-2xl border-b-2 border-[#309689] cursor-pointer font-semibold hover:text-[#65c1b4] transition-colors duration-300 ease-in-out">View all</button>
          </div>
        </div>
        <div>
          <div className="mt-25">
            {vacansys.map((vacansy) => (
              <div className=" bg-white shadow-[0_3px_8px_0_rgba(48,150,137,0.08)] p-10 rounded-3xl mb-6 hover:scale-101 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <p className="text-[#309689] bg-[#309689]/10 p-1 rounded-lg">{vacansy.time}</p>
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
                <div className="mt-15 flex justify-between items-center">
                  <div className="flex">
                    <Image
                      src={vacansy.logo}
                      alt={vacansy.title}
                      width={40}
                      height={40}
                    />
                    <div className="ml-5">
                      <h4 className="text-3xl font-semibold text-black">{vacansy.title}</h4>
                      <p className="text-black ">{vacansy.desc}</p>
                    </div>
                  </div>
                  <button className="bg-[#309689] text-white py-3.5 px-5 rounded-lg cursor-pointer font-semibold hover:bg-[#55bfb1] transition-colors duration-300 ease-in-out">Job details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}