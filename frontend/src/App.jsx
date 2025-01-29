import { BrowserRouter, Routes, Route } from "react-router";
import { Landing } from "./modules/Landing";
import { AppLayout } from "./ui/layouts/AppLayout";
import Partnerek from "./modules/Partner";
import { Kapcsolat } from "./modules/Contact";
import { Us } from "./modules/Us/Us";
import { ShoppingCart } from "./modules/ProductCart/ProductCart";
import {Products} from "./modules/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route  index element={<Landing />} />
          <Route index path="partnerek" element={<Partnerek />} />
          <Route
            index
            path="webshop"
            element={<Products />}
          />
          <Route
            index
            path="rolunk"
            element={<Us/>}
          />
          <Route index path="kapcsolat" element={<Kapcsolat />} />
        </Route>
        <Route
          path="*"
          caseSensitive={false}
          element={<div className="h-full w-full bg-[#da2128]">ERROR</div>}
        />
        <Route index path="cart" element={ <ShoppingCart/>}/>
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
