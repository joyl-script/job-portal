import Image from "next/image";

export default function Footer() {
  const footerColumns = [
    {
      title: "Company",
      links: ["About Us", "Our Team", "Partners", "For Candidates", "For Employers"],
    },
    {
      title: "Job Categories",
      links: ["Telecommunications", "Hotels & Tourism", "Construction", "Education", "Financial Services"],
    },
  ];

  return (
    <footer className="bg-black pt-25 pb-15">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-25">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <Image
                src={'/job.svg'}
                alt='logo'
                width={28}
                height={28}
              />
              <span className="text-white text-xl font-semibold">Job</span>
            </div>
            <p className="text-white/80 text-x1 font-semibold">
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white text-xl font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-white/80 text-sm mb-4">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/40 mb-3 focus:outline-none focus:border-[#309689]"
            />
            <button className="w-full bg-[#309689] text-white font-bold py-3 rounded-2xl hover:bg-[#267a6f] transition-colors cursor-pointer">
              Subscribe now
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/40 text-sm">
            © Copyright Job Portal 2024. Designed by Figma.guru
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white underline">Privacy Policy</a>
            <a href="#" className="text-white underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}