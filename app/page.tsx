import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ItemsNavbar } from "@/components/itemsNavbar";
import { SloganSection } from "@/components/sloganSection";
import { ProductsSection } from "@/components/productsSection"

export default async function Home() {
 
  return (
    <>
      <Header />

      <main className="w-full p-2 bg-gray-50 pb-10">
        <div className="mt-20">
          <SloganSection />
        </div>

        <section className="flex flex-col mt-10">
          <p className="w-full text-center text-2xl font-semibold mb-2">
            Produtos
          </p>
          <div className="mt-3 flex gap-x-2 items-center justify-center">
            <p className="text-center font-light text-gray-700 w-fit">
              categoria:
            </p>
            <ItemsNavbar />
          </div>

          <ProductsSection />
        </section>

        <div className="mt-10">
          <Testimonials />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
