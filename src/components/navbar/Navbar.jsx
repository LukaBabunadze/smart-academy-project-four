import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Navbar</h1>
      <ul className={styles.listWrapper}>
        <li>Home</li>
        <li>Contact</li>
        <li>Cart</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;

// export default function Navbar () {
//   return (
//     <nav>
//       <h1>Navbar</h1>
//       <ul>
//         <li>Home</li>
//         <li>Contact</li>
//         <li>Cart</li>
//         <li>Profile</li>
//       </ul>
//     </nav>
//   );
// };
