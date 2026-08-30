export default function Nav() {

  const navLinks = [
    { label: 'Home', href: '/home' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav>
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}><a className="text-white opacity-[0.6] hover:opacity-100 transition-opacity duration-300 ease-in-out" href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}