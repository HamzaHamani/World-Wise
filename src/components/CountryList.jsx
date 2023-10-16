import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
function CountryList({ loading, cities }) {
  const length = cities.length;

  if (loading) return <Spinner />;
  if (length == 0)
    return (
      <Message message="Add your List of cities you visited by clicking on the map" />
    );
  return (
    <ul className={styles.countriesList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
