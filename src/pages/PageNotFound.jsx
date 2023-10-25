import { motion } from "framer-motion";
import AnimatedPages from "./animatedPages";

export default function PageNotFound() {
  return (
    <AnimatedPages>
      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 5, ease: "linear", type: "spring" }}
      >
        <h1>Page not found 😢</h1>
      </motion.div>
    </AnimatedPages>
  );
}
