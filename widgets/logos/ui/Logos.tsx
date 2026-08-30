import Image from "next/image"

export default function Logos() {

  const logos = [
    { src: '/logo (1).svg', name: 'spotify', width: 140, height: 42 },
    { src: '/logos.svg', name: 'slack', width: 121, height: 48 },
    { src: '/logo (2).svg', name: 'adobe', width: 133, height: 42 },
    { src: '/logo (3).svg', name: 'asana', width: 127, height: 42 },
    { src: '/logo (4).svg', name: 'linear', width: 148, height: 42 },
  ]

  return (
    <section className="bg-black py-10">
      <div className="container flex justify-between">
        {logos.map((logo) => (
          <a href="#">
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}

            />
          </a>
        ))}
      </div>
    </section>
  )
}