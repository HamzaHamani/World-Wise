import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lng);

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      map posotion: {lat} and {lng}
    </div>
  );
}

export default Map;
