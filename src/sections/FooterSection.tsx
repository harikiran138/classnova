export const FooterSection = () => {
  return (
    <footer id="contact" className="bg-[#01040B] py-16 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">ClassNova</p>
          <p className="mt-3 text-sm text-white/60">
            Turning every projector into a smart classroom with teacher-first technology.
          </p>
          <p className="mt-3 text-xs text-white/40">Prototype descriptions may evolve. We publish every update transparently.</p>
          <div className="mt-4 flex gap-3 text-xs text-white/50">
            <span>© {new Date().getFullYear()} ClassNova</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>About</li>
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Demo</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Support</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Contact</li>
            <li>Support</li>
            <li>Social links</li>
            <li>Press kit</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
