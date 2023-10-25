// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import { motion } from "framer-motion";
import AnimatedPages from "./animatedPages";

export default function Product() {
  return (
    <AnimatedPages>
      <motion.main
        className={styles.product}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 5, ease: "linear", type: "spring" }}
      >
        <PageNav />
        <section>
          <div>
            <h2>
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
          <img
            src="img-2.jpg"
            alt="overview of a large city with skyscrapers"
          />
        </section>
      </motion.main>
    </AnimatedPages>
  );
}
