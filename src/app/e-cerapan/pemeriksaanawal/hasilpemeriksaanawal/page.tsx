'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/e-cerapan/ui/Breadcrumb';
import Stepper from '@/components/e-cerapan/ui/Stepper';
import StatusBanner from '@/components/e-cerapan/ui/StatusBanner';
import StatCard from '@/components/e-cerapan/ui/StatCard';

// ─── Mock Data (Replace with data from state/API) ────────────

const IDENTITAS_ALAT = {
    merek: 'Tokheim',
    tipe: 'Quantium 310',
    noSeri: 'SN-2023-TKJ-0456',
    noSPBU: '34.121.01',
    namaSPBU: 'PT. Pertamina Retail',
    nomorOrder: 'ORD-2024-0874',
};

const CHECKLIST_RESULTS = [
    {
        no: 1,
        deskripsi: 'Apakah PU BBM dilengkapi dengan Persetujuan Tipe (untuk Tera)?\n- Apakah informasi pada pelat identitas sesuai dengan Persetujuan Tipe\n- Apakah spesifikasi teknis PU BBM sesuai dengan Persetujuan Tipe?',
        penilaian: 'Ya'
    },
    {
        no: 2,
        deskripsi: 'Apakah PU BBM sudah digunakan dengan benar?\n- Apakah tanda tera sebelumnya masih utuh dan tidak ada yang rusak?\n- Apakah tidak terdapat alat tambahan yang merubah spesifikasi dan/atau mempengaruhi\nhasil pengukuran PU BBM?',
        penilaian: 'Ya'
    },
    {
        no: 3,
        deskripsi: 'Apakah semua deskripsi yang wajib jelas terpasang pada pelat identitas ada dan terpasang tetap pada\nPU BBM?\n- Apakah identitas pada pelat data lengkap sesuai syarat teknis?\n- Apakah identitas pada pelat data mudah terlihat, jelas dan mudah dibaca?',
        penilaian: 'Ya'
    },
    { no: 4, deskripsi: 'Apakah PU BBM dalam kondisi lengkap dan bersih?', penilaian: 'Ya' },
    { no: 5, deskripsi: 'Apakah PU BBM terpasang dengan kokoh pada pondasinya atau pada sasis Tangki Ukur Mobil BBM?', penilaian: 'Ya' },
    { no: 6, deskripsi: 'Apakah tidak terdapat kerusakan pada penutup Perangkat Penunjukan?', penilaian: 'Ya' },
    { no: 7, deskripsi: 'Apakah Gelas Penglihat bersih serta penuh dengan produk?', penilaian: 'Ya' },
    { no: 8, deskripsi: 'Apakah penunjukan volume, harga satuan, dan total harga sesuai dengan Slang yang dipilih?', penilaian: 'Ya' },
    { no: 9, deskripsi: 'Apakah penunjukan volume, harga satuan, dan total harga sesuai dengan Slang yang dipilih?', penilaian: 'Ya' },
    { no: 10, deskripsi: 'Apakah Slang dalam kondisi baik, (pada slang apakah ditemukan konsdisi seperti lecet, retak, atau pembungkus Slangnya telah usang)?', penilaian: 'Ya' },
    { no: 11, deskripsi: 'Apakah masing-masing nozzle menghentikan aliran cairan ketika dikembalikan ke tempat penyimpanannya?', penilaian: 'Ya' },
    { no: 12, deskripsi: 'Apakah pada PU BBM tidak ditemukan adanya kebocoran atau rembesan cairan?', penilaian: 'Ya' },
];

export default function HasilPemeriksaanAwalPage() {
    const router = useRouter();

    // Derived statistics
    const totalParameter = CHECKLIST_RESULTS.length;
    const memenuhiCount = CHECKLIST_RESULTS.filter(item => item.penilaian === 'Ya').length;
    const tidakMemenuhiCount = CHECKLIST_RESULTS.filter(item => item.penilaian === 'Tidak').length;
    const isLolos = tidakMemenuhiCount === 0;

    return (
        <div className="min-h-screen bg-[#F9F9F9] w-full">
            <div className="px-8 py-8 md:px-12 md:py-12 max-w-[1100px] mx-auto space-y-8">

                {/* Breadcrumb */}
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'E-Cerapan', href: '/e-cerapan' },
                        { label: 'Pemeriksaan Awal' },
                    ]}
                />

                {/* Stepper (Notice currentStep is adjusted visually) */}
                <Stepper
                    steps={['Pemeriksaan Awal', 'Pengujian & Perhitungan', 'Hasil']}
                    currentStep={0}
                    stepStatus="completed"
                />

                {/* 1. Banner Status */}
                <StatusBanner
                    status={isLolos ? 'memenuhi' : 'tidak_memenuhi'}
                    title={isLolos ? 'Memenuhi Syarat' : 'Tidak Memenuhi Syarat'}
                    subtitle={isLolos ? 'Alat dapat dilanjutkan ke tahap pengujian' : 'Alat tidak dapat dilanjutkan ke tahap pengujian'}
                />

                {/* 2. Statistik Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard value={totalParameter} label="Total Parameter" valueColor="text-[#2479BC]" />
                    <StatCard value={memenuhiCount} label="Memenuhi" valueColor="text-[#4ade80]" />
                    <StatCard value={tidakMemenuhiCount} label="Tidak Memenuhi" valueColor="text-red-500" />
                </div>

                {/* 3. Tabel Rincian Hasil */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-gray-200/60 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800">Rincian Hasil Pemeriksaan</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-[14px]">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left py-4 px-6 font-medium text-[#2479BC] w-[60px]">No</th>
                                    <th className="text-left py-4 px-6 font-medium text-[#2479BC]">Deskripsi</th>
                                    <th className="text-center py-4 px-6 font-medium text-[#2479BC] w-[150px]">Penilaian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CHECKLIST_RESULTS.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                                        <td className="py-4 px-6 text-gray-800 align-top font-semibold">{item.no}</td>
                                        <td className="py-4 px-6 text-gray-700 align-top whitespace-pre-line leading-relaxed">
                                            {item.deskripsi}
                                        </td>
                                        <td className="py-4 px-6 align-top text-center">
                                            <span className={`font-medium ${item.penilaian === 'Ya' ? 'text-[#4ade80]' : 'text-red-500'}`}>
                                                {item.penilaian}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 4. Identitas Alat Card */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                    <h3 className="font-bold text-[#2479BC] uppercase mb-6 tracking-wide">
                        Identitas Alat Yang Diperiksa
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 text-[15px]">
                        <div className="flex gap-2">
                            <span className="text-gray-500 w-24">Merek:</span>
                            <span className="font-semibold text-gray-800">{IDENTITAS_ALAT.merek}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500 w-24">Tipe:</span>
                            <span className="font-semibold text-gray-800">{IDENTITAS_ALAT.tipe}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500 w-24">No. Seri:</span>
                            <span className="font-semibold text-gray-800">{IDENTITAS_ALAT.noSeri}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500 w-24">No. SPBU:</span>
                            <span className="font-semibold text-gray-800">{IDENTITAS_ALAT.noSPBU}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500 w-24">No. SPBU:</span>
                            <span className="font-semibold text-gray-800">{IDENTITAS_ALAT.namaSPBU}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500 w-24">Nomor Order:</span>
                            <span className="font-semibold text-gray-800">{IDENTITAS_ALAT.nomorOrder}</span>
                        </div>
                    </div>
                </div>

                {/* 5. Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => router.push('/e-cerapan/pemeriksaanawal')}
                        className="w-full sm:w-1/2 py-4 rounded-xl text-[16px] font-semibold text-gray-700 bg-transparent border-2 border-gray-300 hover:bg-gray-50 transition-all active:scale-[0.99]"
                    >
                        Kembali ke Pemeriksaan
                    </button>
                    <button
                        type="button"
                        onClick={() => isLolos && router.push('/e-cerapan/pengujian')}
                        disabled={!isLolos}
                        className={`w-full sm:w-1/2 py-4 rounded-xl text-[16px] font-semibold transition-all ${isLolos
                            ? 'bg-[#2479BC] text-white hover:bg-[#1d6aa6] active:scale-[0.99] cursor-pointer'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Lanjut ke Pengujian
                    </button>
                </div>

            </div>
        </div>
    );
}