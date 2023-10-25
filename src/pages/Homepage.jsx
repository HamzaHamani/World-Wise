import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "/src/components/PageNav";
import AnimatedPages from "./animatedPages";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <AnimatedPages>
      <motion.main
        className={styles.homepage}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 5, ease: "linear", type: "spring" }}
      >
        <PageNav />
        <section>
          <h1>
            You travel the world.
            <br />
            WorldWise keeps track of your adventures.
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link to={`app`} className="cta">
            Start Tracking Now
          </Link>
        </section>
      </motion.main>
    </AnimatedPages>
  );
}
export default Homepage;
