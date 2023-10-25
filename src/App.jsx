import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";

import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./CitiesContext";
polyfillCountryFlagEmojis();

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <CitiesProvider>
      <AnimatePresence mode="wait">
        {/* we add location and key so we can know what route changes */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            {/* 👇 THIS ROUTE GONNA BE DEFUALT WE GONNA SE INSIDE APP WHERE WE PUT IT <OUTLER */}
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/login" element={<Login />} />
          {/*! for invalid path URL */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
      {/* </BrowserRouter> */}
    </CitiesProvider>
  );
}

export default App;
