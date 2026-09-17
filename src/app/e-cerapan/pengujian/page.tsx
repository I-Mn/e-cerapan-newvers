// src/app/e-cerapan/pengujian/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar } from 'lucide-react';
import Breadcrumb from '@/components/e-cerapan/ui/Breadcrumb';
import PageHeader from '@/components/e-cerapan/ui/PageHeader';
import FormField from '@/components/e-cerapan/ui/FormField';
import Stepper from '@/components/e-cerapan/ui/Stepper';
import SectionCard from '@/components/e-cerapan/ui/SectionCard';
import SummaryCard from '@/components/e-cerapan/ui/SummaryCard';

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-lg border border-gray-300 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2479BC]/30 focus:border-[#2479BC] transition-colors disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed';

export default function PengujianPerhitunganPage() {
  const router = useRouter();

  const [dataPengujian] = useState({
    nomorOrder: 'ORD-2024-0847',
    noSPBU: '34.121.01',
    namaPemilik: 'PT. Pertamina Retail',
    nomorPompaUkur: 'PU-001',
    merekTipe: 'Tokheim Quantium 310',
    nomorSeri: 'SN-2023-TKH-0456',
  });

  const [dataNozzle, setDataNozzle] = useState({
    identitas: 'Nozzle 1',
    jenisCairan: 'Pertalite (RON 90)',
    hargaSatuan: '10000',
  });

  const [dataBejana, setDataBejana] = useState({
    merek: 'Pertamina Calibration',
    tipe: 'BU-20L',
    nomorSeri: 'BJ-2023-0012',
    volNominal: '20',
    volSebenarnya: '19.998',
    skalaUtama: '0.05',
    tglVerifikasi: '2023-12-22',
  });

  const [totalisator, setTotalisator] = useState({
    sebelumUji: '15432,000',
    sesudahUji: '15492,000',
    totalTerpakai: '60.000 L',
  });

  // Added a 'status' field. Setting the 3rd one to 'tidak_lolos' to demonstrate the UI.
  const [cerapan, setCerapan] = useState([
    { volNominal: '20', penunjukan: '20,050', volSebenarnya: '19,980', kesalahan: '+0.3504', status: 'lolos' },
    { volNominal: '20', penunjukan: '20,080', volSebenarnya: '20,01', kesalahan: '+0.3498', status: 'lolos' },
    { volNominal: '20', penunjukan: '20,150', volSebenarnya: '19,950', kesalahan: '+0.7500', status: 'tidak_lolos' },
  ]);

  const updateCerapan = (index: number, field: string, value: string) => {
    const updated = [...cerapan];
    updated[index] = { ...updated[index], [field]: value };
    setCerapan(updated);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] w-full">
      <div className="px-8 py-8 md:px-12 md:py-12 max-w-[1100px] mx-auto space-y-8">
        
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'E-Cerapan', href: '/e-cerapan' },
            { label: 'Pengujian & Perhitungan' },
          ]}
        />

        <Stepper
          steps={['Pemeriksaan Awal', 'Pengujian & Perhitungan', 'Hasil']}
          currentStep={1} 
        />

        <PageHeader
          title="Pemeriksaan Pengujian & Perhitungan Awal"
          subtitle="Pompa Ukur BBM — Input data pengujian dan cerapan"
        />

        <SectionCard title="Data Pengujian">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
            <FormField label="Nomor Order"><input type="text" className={INPUT_CLASS} value={dataPengujian.nomorOrder} disabled /></FormField>
            <FormField label="No. SPBU"><input type="text" className={INPUT_CLASS} value={dataPengujian.noSPBU} disabled /></FormField>
            <FormField label="Nama Pemilik/Penanggung Jawab"><input type="text" className={INPUT_CLASS} value={dataPengujian.namaPemilik} disabled /></FormField>
            <FormField label="Nomor Pompa Ukur"><input type="text" className={INPUT_CLASS} value={dataPengujian.nomorPompaUkur} disabled /></FormField>
            <FormField label="Merek/Tipe"><input type="text" className={INPUT_CLASS} value={dataPengujian.merekTipe} disabled /></FormField>
            <FormField label="Nomor Seri"><input type="text" className={INPUT_CLASS} value={dataPengujian.nomorSeri} disabled /></FormField>
          </div>
        </SectionCard>

        <SectionCard title="Data Pengujian Nozzle">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
            <FormField label="Identitas Nozzle" required><input type="text" className={INPUT_CLASS} value={dataNozzle.identitas} onChange={(e) => setDataNozzle({...dataNozzle, identitas: e.target.value})} /></FormField>
            <FormField label="Jenis Cairan" required><input type="text" className={INPUT_CLASS} value={dataNozzle.jenisCairan} onChange={(e) => setDataNozzle({...dataNozzle, jenisCairan: e.target.value})} /></FormField>
            <FormField label="Harga Satuan (Rp/L)" required><input type="text" className={INPUT_CLASS} value={dataNozzle.hargaSatuan} onChange={(e) => setDataNozzle({...dataNozzle, hargaSatuan: e.target.value})} /></FormField>
          </div>
        </SectionCard>

        <SectionCard title="Data Bejana Ukur">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
            <FormField label="Merek" required><input type="text" className={INPUT_CLASS} value={dataBejana.merek} onChange={(e) => setDataBejana({...dataBejana, merek: e.target.value})} /></FormField>
            <FormField label="Tipe/Model" required><input type="text" className={INPUT_CLASS} value={dataBejana.tipe} onChange={(e) => setDataBejana({...dataBejana, tipe: e.target.value})} /></FormField>
            <FormField label="Nomor Seri" required><input type="text" className={INPUT_CLASS} value={dataBejana.nomorSeri} onChange={(e) => setDataBejana({...dataBejana, nomorSeri: e.target.value})} /></FormField>
            <FormField label="Volume Nominal (L)" required><input type="text" className={INPUT_CLASS} value={dataBejana.volNominal} onChange={(e) => setDataBejana({...dataBejana, volNominal: e.target.value})} /></FormField>
            <FormField label="Volume Sebenarnya (L)" required><input type="text" className={INPUT_CLASS} value={dataBejana.volSebenarnya} onChange={(e) => setDataBejana({...dataBejana, volSebenarnya: e.target.value})} /></FormField>
            <FormField label="Skala Utama Sebenarnya (L)" required><input type="text" className={INPUT_CLASS} value={dataBejana.skalaUtama} onChange={(e) => setDataBejana({...dataBejana, skalaUtama: e.target.value})} /></FormField>
            <FormField label="Tanggal Verifikasi Terakhir" required>
              <div className="relative">
                <input type="date" className={INPUT_CLASS} value={dataBejana.tglVerifikasi} onChange={(e) => setDataBejana({...dataBejana, tglVerifikasi: e.target.value})} />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </FormField>
          </div>
        </SectionCard>

        <SectionCard title="Totalisator" subtitle="Penunjukan meter pompa sebelum dan sesudah pengujian">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
            <FormField label="Sebelum Uji — a (L)" required><input type="text" className={INPUT_CLASS} value={totalisator.sebelumUji} onChange={(e) => setTotalisator({...totalisator, sebelumUji: e.target.value})} /></FormField>
            <FormField label="Sesudah Uji — b (L)" required><input type="text" className={INPUT_CLASS} value={totalisator.sesudahUji} onChange={(e) => setTotalisator({...totalisator, sesudahUji: e.target.value})} /></FormField>
            <FormField label="Total Terpakai — (b-a)"><input type="text" className={`${INPUT_CLASS} font-semibold`} value={totalisator.totalTerpakai} disabled /></FormField>
          </div>
        </SectionCard>

        {/* ═══ SECTION 5: Input Cerapan (Dynamic Colors) ═══ */}
        <div className="bg-[#F3F4F6] rounded-xl border border-gray-200 p-6 md:p-8 space-y-6">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-800 text-lg">Input Cerapan</h3>
            <p className="text-[14px] text-gray-500">Masukkan data 3 kali penyerahan untuk masing-masing nozzle</p>
          </div>

          {cerapan.map((item, index) => {
            const isError = item.status === 'tidak_lolos';
            
            // Toggle classes based on status
            const badgeClasses = isError 
              ? 'bg-red-50 text-red-500 border-red-500'
              : 'bg-[#64CC4A]/10 text-[#64CC4A] border-[#64CC4A]';
              
            const inputBorderClasses = isError 
              ? 'border-red-500 text-red-500 focus:ring-red-500/30'
              : 'border-[#64CC4A] text-[#64CC4A] focus:ring-[#64CC4A]/30';

            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-5">
                  <h4 className="font-bold text-gray-800">Cerapan {index + 1}</h4>
                  <span className={`px-4 py-1.5 border rounded-full text-[13px] font-semibold transition-colors ${badgeClasses}`}>
                    E = {item.kesalahan} %
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
                  <FormField label="Vol. Nominal (L)" required>
                    <input type="text" className={INPUT_CLASS} value={item.volNominal} onChange={(e) => updateCerapan(index, 'volNominal', e.target.value)} />
                  </FormField>
                  <FormField label="Penunjukan Cerapan (L)" required>
                    <input type="text" className={INPUT_CLASS} value={item.penunjukan} onChange={(e) => updateCerapan(index, 'penunjukan', e.target.value)} />
                  </FormField>
                  <FormField label="Vol. Sebenarnya (L)" required>
                    <input type="text" className={INPUT_CLASS} value={item.volSebenarnya} onChange={(e) => updateCerapan(index, 'volSebenarnya', e.target.value)} />
                  </FormField>
                  <FormField label="Kesalahan (%)" required>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-[14px] font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${inputBorderClasses}`} 
                      value={item.kesalahan} 
                      onChange={(e) => updateCerapan(index, 'kesalahan', e.target.value)} 
                    />
                  </FormField>
                </div>
              </div>
            );
          })}
        </div>

        {/* ═══ SECTION 6: Ringkasan Perhitungan ═══ */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h3 className="font-bold text-[#2479BC] text-xl mb-6">Ringkasan Perhitungan</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <SummaryCard label="Kesalahan Cerapan 1" value="+0.3504%" status="LOLOS" variant="success" />
            <SummaryCard label="Kesalahan Cerapan 2" value="+0.3498%" status="LOLOS" variant="success" />
            {/* variant = "error" untuk demonstrasi tidak lolos */}
            <SummaryCard label="Kesalahan Cerapan 3" value="+0.7500%" status="TIDAK LOLOS" variant="error" />
            <SummaryCard label="Kesalahan Rata-rata" value="+0.3335%" status="LOLOS" variant="success" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <SummaryCard label="Kemampuan Ulang" value="0.0499%" status="LOLOS" variant="success" />
            {/* variant = "neutral" untuk yang tidak memiliki status khusus */}
            <SummaryCard label="MPE Akurasi" value="± 0.5000%" variant="neutral" />
            <SummaryCard label="MPE Kemampuan Ulang" value="≤ 0.3000%" variant="neutral" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.push('/e-cerapan/pemeriksaanawal')}
            className="w-full sm:w-1/2 py-4 rounded-xl text-[16px] font-semibold text-gray-700 bg-transparent border-2 border-gray-300 hover:bg-gray-50 transition-all active:scale-[0.99]"
          >
            Kembali
          </button>
          <button
            type="button"
            onClick={() => router.push('/e-cerapan/hasilpengujian')}
            className="w-full sm:w-1/2 py-4 rounded-xl text-[16px] font-semibold text-white bg-[#2479BC] hover:bg-[#1d6aa6] transition-all active:scale-[0.99]"
          >
            Lihat Hasil Evaluasi
          </button>
        </div>

      </div>
    </div>
  );
}