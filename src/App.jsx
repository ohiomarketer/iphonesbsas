import { useEffect } from "react";
import { RoutesComponent } from "./components/RoutesComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { ShopProvider } from "./context/shopContext";

function App () {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ShopProvider>
      <div>
        <RoutesComponent />
      </div>
    </ShopProvider>
  )
}

export default App;