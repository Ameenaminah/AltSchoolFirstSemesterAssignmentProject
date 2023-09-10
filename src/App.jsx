import Analytics from "./pages/Analytics";
import Faqs from "./pages/Faqs";
import Features from "./pages/Features";
import Optimize from "./pages/Optimize";
import Pricing from "./pages/Pricing";
import Header from "./components/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Header />
      <Features />
      <Pricing />
      <Analytics />
      <Faqs />
      <Optimize />
      <Footer />
    </>
  );
}

export default App;
