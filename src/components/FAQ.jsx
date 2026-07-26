import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How long does a project take?",
    a: "A landing page usually takes 5–7 days. A full business website takes 2–3 weeks depending on content and revisions. Custom applications are scoped individually.",
  },
  {
    q: "Do you also handle hosting and domain?",
    a: "Yes. We set up your domain, hosting and email, and can manage renewals and updates for you going forward.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every business plan includes a month of free support. After that, we offer monthly maintenance packages for updates, fixes and new features.",
  },
  {
    q: "What technology do you build with?",
    a: "React and Vite on the frontend, Node.js and Express on the backend, and MongoDB Atlas for the database — deployed on Vercel and Render.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill in the requirement form below with your business details and what you need. We'll get back to you within 24 hours with a quote and timeline.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="border-t border-borderMain py-20">
      <div className="max-w-[760px] mx-auto px-6">
        <Reveal className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent bg-accentSoft border border-accent/25 px-3 py-1.5 rounded-full mb-5">
            /faq
          </div>
          <h2 className="font-sora font-bold text-[34px]">
            Questions, answered
          </h2>
        </Reveal>

        <Reveal>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={f.q}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="border-b border-borderMain py-[22px] cursor-pointer"
              >
                <div className="flex justify-between items-center text-[16.5px] font-semibold">
                  {f.q}
                  <span
                    className={`text-xl text-accent font-normal transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 text-[14.5px] text-textMid ${
                    isOpen ? "max-h-[200px] pt-3.5" : "max-h-0"
                  }`}
                >
                  {f.a}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
