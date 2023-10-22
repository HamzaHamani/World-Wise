import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../CitiesContext";
import Button from "./Button";
import styles from "./City.module.css";
import Spinner from "./Spinner";

function City() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { getCities, currentCity, loading } = useCities();

  useEffect(() => {
    getCities(id);
  }, [id]);
  const { cityName, emoji, date, notes } = currentCity;

  const originalDate = new Date(date);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",

    // hour12: false,
    // timeZoneName: "short",
  };

  const formattedDate = originalDate.toLocaleString("en-US", options);

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
        <p>{formattedDate} </p>
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
        <Button
          type={"back"}
          oncClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </div>
  );
  // return <div>{id}</div>;
}

export default City;
