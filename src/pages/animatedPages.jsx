import { motion } from "framer-motion";
function AnimatedPages({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPages;
