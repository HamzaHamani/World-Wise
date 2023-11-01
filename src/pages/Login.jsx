import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPages from "./animatedPages";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const x = useParams();
  console.log(x);

  return (
    <AnimatedPages>
      <motion.main
        className={styles.login}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 5, ease: "linear", type: "spring" }}
      >
        <PageNav />
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <button>Login</button>
          </div>
        </form>
      </motion.main>
    </AnimatedPages>
  );
}
