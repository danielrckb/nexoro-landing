import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/funktionen/integrationen/Hero";
import Integrations from "@/app/components/funktionen/integrationen/Integrations";


export default function Integrationen() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Integrations />
      <Footer />
    </div>
  )
}
