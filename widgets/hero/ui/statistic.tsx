import Image from "next/image"

const sections = [
  { image: '/briefcase(2) 2.svg', number: '25,850', name: 'Jobs' },
  { image: '/g2079.svg', number: '10,250', name: 'Candidates' },
  { image: '/building 1.svg', number: '18,400', name: 'Companies' },
]

export default function Statistic() {
  return (
    <div className="flex mt-20 md:gap-15 gap-4">
      {sections.map((section) => (
        <div className="flex gap-3" key={section.name}>
          <div className="md:p-4 p-2 rounded-full bg-[#309689] flex items-center justify-center">
            <Image
              src={section.image}
              alt="image"
              width={20}
              height={20}
              className="md:w-[28px] md:h-[28px]"
            />
          </div>
          <div>
            <p className="text-white  md:text-[20px] ">{section.number}</p>
            <span className="text-white text-[12px] md:text-[16px] opacity-80">{section.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}