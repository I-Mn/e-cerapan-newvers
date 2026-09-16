import React from 'react'

import Breadcrumb from "@/components/e-cerapan/ui/Breadcrumb";
import Stepper from '@/components/e-cerapan/ui/Stepper';
import PageHeader from '@/components/e-cerapan/ui/PageHeader';
import ResultCard from '@/components/e-cerapan/ui/ResultCard';
import MetricSummary from '@/components/e-cerapan/ui/MetricSummary';
import InfoCard from '@/components/e-cerapan/ui/InfoCard';
import ParameterTable from '@/components/e-cerapan/ui/ParameterTable';

export default function page() {
    return (
        <div className='min-h-screen bg-[#F9F9F9] w-full'>
            <div className="px-8 py-8 md:px-12 md:py-12 max-w-[1100px] mx-auto">

                <Stepper
                    steps={['Pemeriksaan Awal', 'Pengujian/Pemeriksaan', 'Hasil']}
                    currentStep={2}
                />
                <div className='flex flex-col gap-[40px]'>
                    <PageHeader
                        title="Hasil Keseluruhan Pengujian"
                        subtitle="Evaluasi lengkap semua parameter pengujian Pompa Ukur BBM"
                    />

                    {/* masih hardcode */}
                    <ResultCard isSuccess={true} />
                    <MetricSummary diperiksa={12} lolos={12} gagal={0} />
                    <InfoCard />
                    <ParameterTable />

                    <div className='flex gap-[40px]'>
                        <button
                            className="w-full py-[8px] px-[16px] border border-[#686868] text-[#686868] font-bold rounded-lg text-sm">
                            Kembali
                        </button>
                        <button
                            className="w-full py-[8px] px-[16px] border bg-[#2479BC] text-white font-bold rounded-lg text-sm">
                            Kirim Hasil
                        </button>

                    </div>

                </div>


            </div>
        </div>
    )
}
