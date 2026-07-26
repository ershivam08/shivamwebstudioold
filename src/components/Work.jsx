import Reveal from './Reveal'

const items = [
  {
    tag: '01 · Clinic / Healthcare',
    title: 'Appointment-first design',
    desc: 'Clear services, doctor profiles and a booking CTA above the fold.',
    mock: (
      <>
        <div className="absolute top-8 left-3.5 w-[70px] h-2.5 rounded bg-bgVoid" />
        <div className="absolute top-[50px] left-3.5 w-[110px] h-1.5 rounded bg-bgVoid" />
        <div className="absolute top-8 right-3.5 w-[60px] h-[60px] rounded-full bg-bgVoid" />
      </>
    ),
  },
  {
    tag: '02 · Coaching Institute',
    title: 'Batches, results, trust',
    desc: 'Course listings, result highlights and enquiry forms that convert parents.',
    mock: (
      <>
        <div className="absolute top-8 left-3.5 w-[90px] h-2.5 rounded bg-bgVoid" />
        <div className="absolute top-[50px] left-3.5 w-[60px] h-[60px] rounded bg-bgVoid" />
        <div className="absolute top-[50px] left-[82px] w-[60px] h-[60px] rounded bg-bgVoid" />
      </>
    ),
  },
  {
    tag: '03 · Law Firm / Freelancer',
    title: 'Credibility-first layout',
    desc: 'Clean typography and case highlights that make a stranger trust you fast.',
    mock: (
      <>
        <div className="absolute top-8 left-3.5 w-[130px] h-2.5 rounded bg-bgVoid" />
        <div className="absolute top-[50px] left-3.5 w-[60px] h-2 rounded bg-bgVoid" />
        <div className="absolute top-[66px] left-3.5 w-[100px] h-2 rounded bg-bgVoid" />
      </>
    ),
  },
]

export default function Work() {
  return (
    <section id="work" className="border-t border-borderMain py-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <Reveal className="max-w-[600px] mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] text-amber bg-amberSoft border border-amber/25 px-3 py-1.5 rounded-full mb-5">
            /portfolio
          </div>
          <h2 className="font-sora font-bold text-[34px] mb-3.5">Built for every kind of business</h2>
          <p className="text-textMid text-base">
            Every industry needs something a little different. Here's the kind of site we'd build
            for yours.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((it) => (
              <div
                key={it.tag}
                className="bg-bgSurface border border-borderMain rounded-xl2 p-6 relative overflow-hidden"
              >
                <span className="font-mono text-[11px] text-textLow mb-3.5 block">{it.tag}</span>
                <div className="h-[120px] rounded-[9px] bg-bgSurface2 mb-4 relative overflow-hidden border border-borderMain">
                  <div className="absolute top-0 left-0 right-0 h-[22px] bg-bgVoid border-b border-borderMain" />
                  {it.mock}
                </div>
                <h3 className="text-base font-semibold mb-1.5">{it.title}</h3>
                <p className="text-[13.5px] text-textMid">{it.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
