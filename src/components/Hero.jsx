import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_65%)] z-0" />

      <div className="relative z-10 max-w-[820px] mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent bg-accentSoft border border-accent/25 px-3 py-1.5 rounded-full mb-5">
          // full-stack web studio
        </div>
        <h1 className="font-sora font-bold text-[38px] md:text-[56px] leading-[1.08] mb-5">
          Websites that make your business look like it{' '}
          <span className="bg-gradient-to-r from-accent to-[#a5a8ff] bg-clip-text text-transparent">
            means business.
          </span>
        </h1>
        <p className="text-lg text-textMid max-w-[600px] mx-auto mb-8">
          We design and build fast, modern websites for founders, clinics, coaching institutes, law
          firms and freelancers — the kind of site that turns a visitor into a client.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-[14.5px] font-semibold bg-accent text-white hover:bg-[#5457e0] hover:-translate-y-px transition-all"
          >
            Get a free quote
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-[14.5px] font-semibold border border-borderMain text-textHi hover:border-accent transition-all"
          >
            See what we build
          </a>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-0 max-w-[960px] mx-auto relative z-10">
            {/* Code panel */}
            <div className="bg-bgSurface border border-borderMain rounded-xl2 overflow-hidden text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-borderMain bg-bgSurface2">
                <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-textLow">Home.jsx</span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-[1.85] min-h-[200px]">
                <span className="text-textLow">{'// your idea, in code'}</span>
                <br />
                <span className="text-[#a5a8ff]">export default function</span>{' '}
                <span className="text-amber">Home</span>() {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-[#a5a8ff]">return</span> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-amber">Hero</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title=<span className="text-[#7ee8a8]">"Trusted care,"</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cta=<span className="text-[#7ee8a8]">"Book a visit"</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                <span className="inline-block w-[7px] h-[14px] bg-accent align-middle animate-blink" />
                <br />
                &nbsp;&nbsp;);
                <br />
                {'}'}
              </div>
            </div>

            {/* Arrow connector */}
            <div className="flex md:flex-col items-center gap-1.5 px-0 py-2 md:px-3.5 md:py-0 text-accent rotate-90 md:rotate-0">
              <svg
                width="34"
                height="18"
                viewBox="0 0 34 18"
                fill="none"
                className="animate-pulseArrow"
              >
                <path
                  d="M0 9H30M30 9L22 2M30 9L22 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-[10px] text-textLow rotate-0 -rotate-90 md:rotate-0">
                builds to
              </span>
            </div>

            {/* Preview panel */}
            <div className="bg-bgSurface border border-borderMain rounded-xl2 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-borderMain">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-accent to-[#8b8ef8]" />
                <div className="h-1.5 rounded bg-bgSurface2 w-[120px]" />
              </div>
              <div className="p-5 flex flex-col gap-2.5">
                <div className="h-3.5 w-[70%] rounded bg-gradient-to-r from-textHi to-textMid opacity-90" />
                <div className="h-2 w-[90%] rounded bg-bgSurface2" />
                <div className="h-2 w-[60%] rounded bg-bgSurface2" />
                <div className="mt-2 w-[110px] h-[26px] rounded-md bg-accent" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
