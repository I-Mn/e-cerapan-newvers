const contactItems = [
  "(021) 123-4567",
  "info@ecerapan.go.id",
  "Jl. Metrologi No. 1, Jakarta",
];

const socialLinks = ["Facebook", "Instagram", "X"];

export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold">Direktorat Metrologi</p>
          <p className="mt-2 text-xs leading-relaxed text-white/60">
            Kementerian Perdagangan Republik Indonesia. Melayani pengujian
            dan validasi alat ukur secara resmi.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Kontak Kami</p>
          <ul className="mt-2 space-y-1 text-xs text-white/60">
            {contactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Ikuti Kami</p>
          <ul className="mt-2 flex gap-4 text-xs text-white/60">
            {socialLinks.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/50">
        © {new Date().getFullYear()} Direktorat Metrologi. Hak Cipta
        Dilindungi Undang-Undang.
      </div>
    </footer>
  );
}
