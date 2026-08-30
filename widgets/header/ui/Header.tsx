import Image from "next/image"
import Nav from "./Nav"
import Active from "./Active"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-5 md:py-6.5">
      <div className="container flex justify-between items-center">
        <a href="#" className="flex gap-2.5">
          <Image
            src={'/job.svg'}
            alt='logo'
            width={28}
            height={28}
          />
          <span className="text-white text-[20px]">Job Portal</span>
        </a>
        <Nav />
        <Active />
      </div>
    </header>
  )
}