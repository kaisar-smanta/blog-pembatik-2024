import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Alumni Pendidikan Matematika Universitas Lambung Mangkurat (2018)",
    "Guru Matematika SMKS Tabalong (2018-2022)",
    "Guru Matematika SMAN 1 Tanjung (2022 - Sekarang)"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
