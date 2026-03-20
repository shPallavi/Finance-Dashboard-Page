import FilterBar from "../../component/Filters/FilterBar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Finance Dashboard</h1>
      <FilterBar />
    </div>
  );
}
