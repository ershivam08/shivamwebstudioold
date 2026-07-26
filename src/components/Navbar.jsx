import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bgVoid/75 backdrop-blur-md border-b border-borderMain">
      <nav className="max-w-[1160px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5 font-sora font-bold text-[17px]">
          <div className="w-[50px] h-[30px] rounded-lg bg-gradient-to-br from-accent to-[#530542] flex items-center justify-center font-mono text-sm text-white font-bold">
            𒆜SWS
          </div>
          Shivam Web Studio
        </div>

        <div
          className={`md:flex md:static md:flex-row md:gap-8 md:p-0 md:bg-transparent md:border-0 items-center gap-8 ${
            open ? "flex" : "hidden"
          } flex-col fixed top-[65px] left-0 right-0 bg-bgSurface border-b border-borderMain p-5 gap-4`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-textMid hover:text-textHi transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="md:hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold bg-accent text-white hover:bg-[#010138] hover:-translate-y-px transition-all"
          >
            Start a project
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold bg-accent text-white hover:bg-[#8a8aa3] hover:-translate-y-px transition-all"
        >
          Start a project
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-textHi text-2xl bg-transparent border-none cursor-pointer"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
