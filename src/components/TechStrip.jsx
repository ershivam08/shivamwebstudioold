import Reveal from './Reveal'

const items = [
  { num: 'React', lbl: '+ Vite frontend' },
  { num: 'Node', lbl: '+ Express backend' },
  { num: 'Mongo', lbl: 'Atlas database' },
  { num: '100%', lbl: 'mobile-first delivery' },
]

export default function TechStrip() {
  return (
    <section className="border-t border-borderMain py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((it) => (
              <div key={it.lbl} className="text-center p-5">
                <div className="font-sora text-[30px] font-bold text-amber mb-1.5">{it.num}</div>
                <div className="text-[13px] text-textMid">{it.lbl}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
