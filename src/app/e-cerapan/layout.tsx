import TopBar from "@/components/e-cerapan/ui/TopBar";
import SideBar from "@/components/e-cerapan/ui/SideBar";

export default function ECerapanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <TopBar />
      </header>

      <div>
        <SideBar />
        <main>
            {children}
        </main>
      </div>
    </div>
  );
}
