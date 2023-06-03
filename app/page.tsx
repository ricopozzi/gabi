import { Header } from "@/components/header";
import { ItemsNavbar } from "@/components/itemsNavbar";
import { SloganSection } from "@/components/sloganSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full p-2 bg-gray-50">
        <div className="mt-20">
          <SloganSection />
        </div>

        <div className="mt-3">
          <ItemsNavbar />
        </div>
      </main>
    </>
  );
}
