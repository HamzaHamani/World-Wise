import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            {/* 👇 THIS ROUTE GONNA BE DEFUALT WE GONNA SE INSIDE APP WHERE WE PUT IT <OUTLER*/}
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<p>countries</p>} />
            <Route path="form" element={<p>form</p>} />
          </Route>
          <Route path="/login" element={<Login />} />
          {/*! for invalid path URL */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
