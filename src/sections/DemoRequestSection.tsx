export const DemoRequestSection = () => {
  return (
    <section id="demo" className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Request a walkthrough</p>
            <h2 className="mt-4 text-3xl font-semibold">Join the pilot review queue</h2>
            <p className="mt-4 text-white/70">
              We onboard a maximum of 2 institutions per month so the core team can be on-site. Expect an honest conversation about risks, not a sales pitch.
            </p>
            <div className="mt-8 space-y-4 text-white/80">
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
              <label className="text-sm text-white/70">Requirement</label>
              <textarea className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white" rows={4} />
            </div>
            <button className="w-full rounded-full bg-white py-3 text-sm font-semibold text-[#050C1F]">Request pilot review</button>
            <p className="text-xs text-white/50">We reply with a shared notes doc + NDA within 24 hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestSection;
