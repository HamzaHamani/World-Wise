import Map from "../components/Map";
import SideBar from "../components/SideBar";
import styles from "./AppLayout.module.css";
import { motion } from "framer-motion";
import AnimatedPages from "./animatedPages";

function AppLayout() {
  return (
    <AnimatedPages>
      {" "}
      <motion.div
        className={styles.app}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 5, ease: "linear", type: "spring" }}
      >
        <SideBar />
        <Map />
      </motion.div>
    </AnimatedPages>
  );
}

export default AppLayout;
