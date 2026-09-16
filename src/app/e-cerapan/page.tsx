import React from 'react';
import { ChevronRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ECerapanPage() {
  const cards = [
    { title: "Pompa Ukur BBM", href: "#" },
    { title: "Pompa Ukur X", href: "#" },
    { title: "Pompa Ukur X", href: "#" },
    { title: "Pompa Ukur X", href: "#" },
    { title: "Pompa Ukur X", href: "#" },
    { title: "Pompa Ukur BBM", href: "#" },
    { title: "Pompa Ukur X", href: "#" },
    { title: "Pompa Ukur X", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9E6] w-full">
      <div className="mx-auto px-8 py-8 md:px-36 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[18px] leading-[29.67px] tracking-[-1.14px] font-normal mb-8">
          <Link href="/" className="text-neutral-800 hover:text-black">Home</Link>
          <ChevronRight className="w-5 h-5 text-neutral-800" strokeWidth={1.5} />
          <span className="text-[#2479BC]">E-Cerapan</span>
        </div>

        {/* Header */}
        <h1 className="text-[36px] font-bold leading-[1.4] text-[#2479BC] mb-3">
          Mulai Cerapan
        </h1>
        <p className="text-black text-[20px] font-normal leading-[1.4] mb-12">
          Pilih jenis cerapan yang ingin dilakukan untuk memulai proses pengujian alat ukur.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="bg-white rounded-[16px] pt-8 pb-6 px-4 flex flex-col items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all border border-gray-100 w-full"
            >
              <div className="flex-1 w-full flex items-center justify-center">
                <Image
                  src="/pump.png"
                  alt={card.title}
                  width={120}
                  height={120}
                  className="object-contain scale-[1.3]"
                />
              </div>
              <span className="text-[#2479BC] font-medium text-center text-[14px] leading-[1.4] whitespace-nowrap mt-4">
                {card.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-[#2479BC] rounded-xl py-6 px-8 flex items-center gap-6 w-full">
          <div className="bg-white rounded-2xl shrink-0 flex items-center justify-center w-[54px] h-[54px]">
            <AlertCircle className="w-[28px] h-[28px] text-[#2479BC]" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-normal text-[20px] text-white mb-1 leading-[1.4]">Panduan Penggunaan</h3>
            <p className="text-neutral-50 text-[16px] font-normal leading-[1.4]">
              Pastikan semua peralatan standar telah disiapkan sebelum memulai pengujian. Ikuti setiap tahap sesuai prosedur yang berlaku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
