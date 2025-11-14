export const FloatingCtas = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/50">
        WhatsApp team
      </button>
      <button className="rounded-full bg-[#FF7A00] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF7A00]/50">
        Book DIDAC slot
      </button>
      <button className="rounded-full bg-white/10 px-5 py-2 text-xs uppercase tracking-wide text-white backdrop-blur">
        Back to top
      </button>
      <p className="text-[10px] text-white/60">TODO: Hook to actual actions + scroll progress</p>
    </div>
  );
};

export default FloatingCtas;
