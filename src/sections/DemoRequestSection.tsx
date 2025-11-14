export const DemoRequestSection = () => {
  return (
    <section id="demo" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Demo</p>
            <h2 className="section-heading mt-4">Request a walkthrough</h2>
            <p className="section-subtitle mt-4">
              We onboard two institutions per month so every pilot gets full attention.
            </p>
            <div className="mt-8 space-y-3 text-white/80 text-base">
              <p>📍 Bengaluru · Mumbai · Delhi</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@classnova.com</p>
              <p>🗓️ Current wait time: 10 days</p>
            </div>
          </div>
          <form className="space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div>
              <label className="text-sm text-white/70">Full name</label>
              <input className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white" />
              </div>
              <div>
                <label className="text-sm text-white/70">Phone / WhatsApp</label>
                <input className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">Institution</label>
              <input className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white" />
            </div>
            <div>
              <label className="text-sm text-white/70">What do you need?</label>
              <textarea className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white" rows={4} />
            </div>
            <button className="btn-pill w-full bg-white py-3 text-sm font-semibold text-[#050C1F]">Request pilot review</button>
            <p className="text-xs text-white/50">We reply within 24 hours with notes, NDA, and next steps.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestSection;
