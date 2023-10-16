import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
function CountryList({ loading, cities }) {
  console.log(cities);
  const length = cities.length;

  if (loading) return <Spinner />;
  if (length == 0)
    return (
      <Message message="Add your List of cities you visited by clicking on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (arr.map((el) => el.country).includes(city.country)) {
      return arr;
    } else {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
  }, []);

  // const countries = cities.reduce((acc, cur) => {
  //   if (acc.map((el) => el.country).includes(cur.country)) return acc;
  //   else return [...acc, { country: cur.country, emoji: cur.emoji }];
  // }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
