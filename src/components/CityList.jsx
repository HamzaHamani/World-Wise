import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

import { useCities } from "../CitiesContext";
function CityList() {
  const { cities, loading } = useCities();
  const length = cities.length;

  if (loading) return <Spinner />;
  if (length == 0)
    return (
      <Message message="Add your List of cities you visited by clicking on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
