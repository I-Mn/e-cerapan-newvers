'use client';

import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section id="services" className="mx-auto max-w-content px-6 py-14 md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex justify-center">
          <div className="flex items-center justify-center rounded-2xl bg-brand-cream shadow-inner">
            <Image
              src="/assets/images/service-icon.png"
              alt="Service Icon"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
            Satu Layanan Beragam Alat Ukur
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            E-Cerapan mendukung pengelolaan berbagai jenis alat ukur, dari
            timbangan, meteran air, meteran gas, hingga alat ukur takar,
            timbang, dan perlengkapannya (UTTP) lainnya.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Proses pengujian yang lebih sederhana dan terstandarisasi
            membantu mempercepat pelayanan tanpa mengurangi ketelitian dan
            akurasi hasil kerja.
          </p>
        </div>
      </div>
    </section>
  );
}
