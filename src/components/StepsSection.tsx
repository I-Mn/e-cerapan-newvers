import { CreatorCard } from "@/components/Card";
import { Check } from 'lucide-react'

export default function StepsSection() {
  return (
    <section className="bg-blue-500 py-14 md:py-20 rounded-tl-[100px] rounded-br-[100px]">
      <div className="mx-auto max-w-content px-6 text-center text-white">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">
            3 Langkah Kerja E-Cerapan
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
            Proses sederhana untuk memastikan alat ukur Anda tervalidasi
            dengan baik.
          </p>
        </div>


        <div className="mt-10 mx-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <CreatorCard
            steps={1}
            title="Masukkan Pengukuran"
            description="Masukkan laju alir maksimum (Qmax) dan hasil volume pengujian pompa ukur yang diperoleh di lapangan."
          />
          <CreatorCard
            steps={2}
            title="Perhitungan Otomatis"
            description="I-Cerapan menghitung MMQ, kesalahan penunjukan (Efd), kemampuan ulang, dan toleransi anti-drain sesuai Batas Kesalahan yang Diizinkan (BKD) yang berlaku."
          />
          <CreatorCard
            steps={3}
            title="Lihat Hasil dan Validasi"
            description="Hasil perhitungan langsung ditampilkan, menunjukkan apakah pompa ukur, sudah sesuai dengan standar atau perlu dilakukan penyetelan ulang, lengkap dengan rincian perhitungannya."
          />
        </div>
      </div>
    </section>
  );
}
