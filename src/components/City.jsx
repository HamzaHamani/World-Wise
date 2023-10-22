import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../CitiesContext";
import styles from "./City.module.css";
import Spinner from "./Spinner";

function City() {
  const { id } = useParams();
  const { getCities, currentCity, loading } = useCities();
  // TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };
  useEffect(() => {
    getCities(id);
  }, [id]);

  const [search, setSearch] = useSearchParams();
  const { cityName, emoji, date, notes } = currentCity;
  if (loading) return <Spinner />;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>date </p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        {/* <ButtonBack /> */}
        button
      </div>
    </div>
  );
  // return <div>{id}</div>;
}

export default City;
