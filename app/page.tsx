import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { ProductCard } from "@/components/ProductCard";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ItemsNavbar } from "@/components/itemsNavbar";
import { SloganSection } from "@/components/sloganSection";
import { contentful} from "@/lib/contentful"

async function getProducts() {

  const entries = await contentful.getEntries({
    "metadata.tags.sys.id[all]": ['feminino']
  })

  return entries

}

export default async function Home() {
  const entries = await getProducts()
  
  console.log(entries.items)
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

          <div className="mt-10 flex flex-wrap gap-7 justify-center items-center">
            <ProductCard
              imageUrl="https://picsum.photos/600/500"
              description="descrição teste bla bla bla lorem10j dnsadosajdsiajd iaojdoj aoid sdmoadj aiosdjaoisj"
              sizes={["M", "G", "GG"]}
              title="Cropped amarelo"
            />

            <ProductCard
              imageUrl="https://picsum.photos/600/500"
              description="descrição teste bla bla bla lorem10j dnsadosajdsiajd iaojdoj aoid sdmoadj aiosdjaoisj"
              sizes={["M", "G", "GG"]}
              title="Cropped amarelo"
            />
          </div>
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
