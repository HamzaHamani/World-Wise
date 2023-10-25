import { useContext } from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";

const URL = "http://localhost:9000";
const CitiesContext = createContext(null);

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (err) {
        alert("there was an error while fitching cities");
      } finally {
        // console.log("done");
        setLoading(false);
      }
    }
    fetchCities();
  }, []);
  async function getCities(id) {
    try {
      setLoading(true);
      const res = await fetch(`${URL}/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch (err) {
      alert("there was an error");
    } finally {
      // console.log("done");
      setLoading(false);
    }
  }
  async function createCities(newCity) {
    try {
      setLoading(true);
      const res = await fetch(`${URL}/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setCities((previous) => [...previous, data]);
      console.log(data);
    } catch (err) {
      alert("there was an error");
    } finally {
      // console.log("done");
      setLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        currentCity,
        getCities,
        createCities,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const value = useContext(CitiesContext);
  if (value === undefined) throw new Error("u used context outside proviedr");
  return value;
}

export { useCities, CitiesProvider };
