import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyUiNav></DaisyUiNav> */}
      </header>
      <main>
        <PricingOptions></PricingOptions>
      </main>
    </>
  );
}

export default App;
