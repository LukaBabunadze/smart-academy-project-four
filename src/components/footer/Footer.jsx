import styles from "./Footer.module.css";

const Footer = ({ year, company }) => {
  return (
    <footer className={styles.footer}>
      {company} {year}
    </footer>
  );
};

export default Footer;
