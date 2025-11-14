export const FooterSection = () => {
  return (
    <footer id="contact" className="bg-[#01040B] py-16 text-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">ClassNova</p>
          <p className="mt-3 text-sm text-white/60">
            Turning every projector into a smart classroom with teacher-first technology.
          </p>
          <p className="mt-3 text-xs text-white/40">This site describes prototype hardware/software (rev-02). Specs may change before general availability.</p>
          <div className="mt-4 flex gap-3 text-xs text-white/50">
            <span>© {new Date().getFullYear()} ClassNova</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Hardware kit (rev-02)</li>
            <li>Teacher OS beta</li>
            <li>Content packs (MoU)</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Build log</li>
            <li>Pilot FAQs</li>
            <li>Press kit (coming soon)</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>hello@classnova.com</li>
            <li>+91 98765 43210</li>
            <li>Bengaluru · Mumbai · Delhi</li>
            <li>GST + company docs on request</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
