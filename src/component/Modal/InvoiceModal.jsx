import styles from "./InvoiceModal.module.css";

export default function InvoiceModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <h2 className={styles.title}>{data.id}</h2>
        <p className={styles.text}>Client: {data.client}</p>
        <p className={styles.text}>Project: {data.project}</p>
        <p className={styles.text}>Amount: {data.amount}</p>

        <p className={styles.text}>Status: {data.status}</p>

        <button className={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
