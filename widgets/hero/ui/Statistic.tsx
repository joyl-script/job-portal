import Image from "next/image"

const sections = [
  { image: '/briefcase(2) 2.svg', number: '25,850', name: 'Jobs' },
  { image: '/g2079.svg', number: '10,250', name: 'Candidates' },
  { image: '/building 1.svg', number: '18,400', name: 'Companies' },
]

export default function Statistic() {
  return (
    <div className="flex mt-20 gap-15">
      {sections.map((section) => (
        <div className="flex gap-3" key={section.name}>
          <div className="p-4 rounded-full bg-[#309689] flex items-center justify-center">
            <Image
              src={section.image}
              alt="image"
              width={28}
              height={28}
              className=""
            />
          </div>
          <div>
            <p className="text-white text-[20px] ">{section.number}</p>
            <span className="text-white opacity-80">{section.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}