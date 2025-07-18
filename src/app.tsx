import Header from "./components/header";
import Banner from "./components/header-banner";
import CategorySelection from "./components/category-selection";
import DeviceInfo from "./components/device-info";
import DevicesLocation from "./components/device-location";
import DevicePrice from "./components/device-price";
import FooterBanner from "./components/footer-banner";
import ButtonsSection from "./components/buttons-section";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategorySelection />
      <DeviceInfo />
      <DevicesLocation />
      <DevicePrice />
      <ButtonsSection />
      <FooterBanner />
      <Footer />
    </>
  );
}

export default App;
