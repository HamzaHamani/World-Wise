import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useState } from "react";
import { useEffect } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
polyfillCountryFlagEmojis();
const URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (err) {
        alert("there was an error");
      } finally {
        // console.log("done");
        setLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            {/*👇 THIS ROUTE GONNA BE DEFUALT WE GONNA SE INSIDE APP WHERE WE PUT IT <OUTLER*/}
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={<CityList cities={cities} loading={loading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} loading={loading} />}
            />
            <Route path="form" element={<Form />} />
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
