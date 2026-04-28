"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const NAV_LIST = [
  { id: 1, title: "Main", url: "/" },
  { id: 2, title: "Cart", url: "/cart" },
  { id: 3, title: "Profile", url: "/profile" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <h1>Navbar</h1>
      {NAV_LIST.map((item) => (
        <div
          key={item.id}
          className={`${styles.listWrapper} ${pathname === item.url ? styles.active : ""}`}
        >
          <Link href={item.url}>
            <h3>{item.title}</h3>
          </Link>
        </div>
      ))}
      <div className={styles.listWrapper}></div>
    </nav>
  );
};

export default Navbar;
