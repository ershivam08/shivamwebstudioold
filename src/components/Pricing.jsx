import Reveal from "./Reveal";

const plans = [
  {
    name: "Landing Page",
    price: "₹5,999",
    note: "Delivered in 5–7 days",
    features: [
      "1 responsive page",
      "Contact / enquiry form",
      "Basic on-page SEO",
      "Free domain & hosting setup guidance",
    ],
    featured: false,
    cta: "Get this plan",
  },
  {
    name: "Business Website",
    price: "₹10,999",
    note: "Delivered in 2–3 weeks",
    features: [
      "Up to 6 pages",
      "Custom design, not a template",
      "Requirement-form lead capture",
      "SEO + performance optimization",
      "1 month post-launch support",
    ],
    featured: true,
    cta: "Get this plan",
  },
  {
    name: "Custom Application",
    price: "Custom",
    note: "Scoped to your requirements",
    features: [
      "Full MERN stack build",
      "Admin dashboard / auth",
      "Database & API design",
      "Ongoing maintenance available",
    ],
    featured: false,
    cta: "Discuss project",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-borderMain py-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <Reveal className="max-w-[600px] mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent bg-accentSoft border border-accent/25 px-3 py-1.5 rounded-full mb-5">
            $ pricing --view
          </div>
          <h2 className="font-sora font-bold text-[34px] mb-3.5">
            Simple, transparent pricing
          </h2>
          <p className="text-textMid text-base">
            Every project is scoped individually — these are starting points.
            Final quote depends on pages, features and timeline.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative bg-bgSurface border rounded-xl2 p-8 flex flex-col ${
                  p.featured
                    ? "border-accent shadow-[0_0_0_1px_#6366F1,0_20px_50px_-20px_rgba(99,102,241,0.4)]"
                    : "border-borderMain"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 bg-accent text-white text-[11px] font-semibold px-3 py-1 rounded-full font-mono">
                    Most popular
                  </span>
                )}
                <h3 className="text-[15px] text-textMid font-medium mb-2.5 uppercase tracking-wide">
                  {p.name}
                </h3>
                <div className="font-sora text-[36px] font-bold mb-1">
                  {p.price}{" "}
                  <span className="text-sm text-textMid font-normal">
                    starting
                  </span>
                </div>
                <div className="text-[13px] text-textLow mb-6">{p.note}</div>
                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-textMid flex gap-2.5 items-start"
                    >
                      <span className="text-accent font-bold flex-shrink-0">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] text-[14.5px] font-semibold transition-all ${
                    p.featured
                      ? "bg-accent text-white hover:bg-[#5457e0]"
                      : "border border-borderMain text-textHi hover:border-accent"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
