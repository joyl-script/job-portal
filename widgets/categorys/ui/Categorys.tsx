import Image from "next/image"

export default function Categorys() {

  const categorys = [
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
    { img: '/g2898.svg', title: 'Construction', nik: '1520 jobs' },
  ]

  return (

    <section className="bg-[#309689]/10 md:pt-15 pt-10 pb-30">
      <div className="container text-center">
        <div>
          <h1 className="md:text-5xl text-3xl font-bold text-black">Browse by Category</h1>
          <p className="text-black mt-6">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-15">
            {categorys.map((category, index) => (
              <div
                key={index}
                className="bg-white p-12 rounded-[20px] flex flex-col items-center gap-8 border-2 border-transparent hover:border-[#309689] hover:scale-103 transition-all duration-300 ease-in-out"
              >
                <Image
                  src={category.img}
                  alt={category.title}
                  width={40}
                  height={40}
                />
                <p className="text-2xl font-bold">{category.title}</p>
                <span className="text-[#309689] bg-[#309689]/10 py-1 px-2 rounded-lg">
                  {category.nik}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}