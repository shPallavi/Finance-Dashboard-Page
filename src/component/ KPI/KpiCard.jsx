import styles from "./KpiCard.module.css";

export default function KpiCard({ title, value }) {
  return (
    <>
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <h1 className={styles.value}>{value}</h1>
      </div>
    </>
  );
}
