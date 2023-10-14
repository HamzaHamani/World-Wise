import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./page/Product";
import Pricing from "./page/Pricing";
import Homepage from "./page/Homepage";
import PageNotFound from "./page/PageNotFound";
import AppLayout from "./page/AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
