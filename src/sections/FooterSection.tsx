export const FooterSection = () => {
  return (
    <footer id="contact" className="bg-[#01040B] py-12 text-white">
      <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">ClassNova</p>
          <p className="mt-3 text-sm text-white/60">
            Turning every projector into a smart classroom with teacher-first technology.
          </p>
          <div className="mt-4 flex gap-3 text-xs text-white/50">
            <span>© {new Date().getFullYear()} ClassNova</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Hardware kit</li>
            <li>Teacher OS</li>
            <li>Content packs</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>hello@classnova.com</li>
            <li>+91 98765 43210</li>
            <li>Bengaluru · Mumbai · Delhi</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
