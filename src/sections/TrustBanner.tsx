const brands = [
  "Kendriya Vidyalaya",
  "Delhi Public School",
  "Reliance Foundation",
  "Teach For India",
  "Aditya Birla Schools",
  "Municipal Corp",
];

export const TrustBanner = () => {
  return (
    <section id="trust" className="bg-[#0A1628] py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-white/5 bg-white/5 px-6 py-8 text-center text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Trusted by innovative institutions</p>
          <div className="mt-6 grid grid-cols-2 gap-6 text-white/80 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="text-sm font-medium uppercase tracking-wide">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
