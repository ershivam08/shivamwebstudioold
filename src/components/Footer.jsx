export default function Footer() {
  return (
    <footer className="border-t border-borderMain py-10">
      <div className="max-w-[1160px] mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
        <p className="text-[13.5px] text-textLow">
          © 2026 Shivam Web Studio. All rights reserved.
        </p>
        <div className="flex gap-[22px]">
          <a
            href="#services"
            className="text-[13.5px] text-textMid hover:text-textHi transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-[13.5px] text-textMid hover:text-textHi transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-[13.5px] text-textMid hover:text-textHi transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
