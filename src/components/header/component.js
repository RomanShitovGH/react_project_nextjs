import Link from "next/link";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <Link href="/" className={styles.link}>
        Главная страница
      </Link>
      <Link href="/restaurants" className={styles.link}>
        Рестораны
      </Link>
    </header>
  );
};
