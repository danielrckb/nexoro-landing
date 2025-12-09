import Header from "../components/Header";
import FAQ2 from "../components/kontakt/FAQ2";
import Form from "../components/kontakt/Form";
import Footer from "../components/Footer";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Form />
      <FAQ2 />
      <Footer />
    </div>
  )
}
