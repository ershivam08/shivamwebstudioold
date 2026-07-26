import Reveal from "./Reveal";

const services = [
  {
    icon: "🏢",
    title: "Business Websites",
    desc: "Professional multi-page sites for clinics, schools, law firms and local businesses.",
  },
  {
    icon: "🎯",
    title: "Portfolio Websites",
    desc: "Sharp, personal sites for freelancers and creators that show your work off properly.",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Product catalogues, cart and checkout — built to actually convert visitors into orders.",
  },
  {
    icon: "⚙️",
    title: "Custom MERN Apps",
    desc: "Dashboards, booking systems, internal tools — built on React, Node and MongoDB.",
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    desc: "High-conversion single pages for launches, campaigns and lead generation.",
  },
  {
    icon: "🔧",
    title: "Maintenance & Hosting",
    desc: "Domain, hosting setup and ongoing updates so your site keeps running smoothly.",
  },
  {
    icon: "📈",
    title: "SEO Optimization",
    desc: "Technical and on-page SEO so the right people actually find you on Google.",
  },
  {
    icon: "♻️",
    title: "Website Redesign",
    desc: "Already have a site that feels dated? We rebuild it to look and load like it should.",
  },
  {
    icon: "💬",
    title: "Ongoing Support",
    desc: "Direct access to your developer for changes, fixes and new features as you grow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-borderMain py-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <Reveal className="max-w-[600px] mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent bg-accentSoft border border-accent/25 px-3 py-1.5 rounded-full mb-5">
            $ services --list
          </div>
          <h2 className="font-sora font-bold text-[34px] mb-3.5">
            Everything your business needs online
          </h2>
          <p className="text-textMid text-base">
            From a one-page landing site to a full custom application — one
            studio, one point of contact, no juggling freelancers.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-borderMain border border-borderMain rounded-xl2 overflow-hidden">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-bgVoid hover:bg-bgSurface transition-colors p-8"
              >
                <div className="w-[38px] h-[38px] rounded-[9px] bg-accentSoft flex items-center justify-center mb-[18px] text-accent">
                  {s.icon}
                </div>
                <h3 className="text-[17px] font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-textMid">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
