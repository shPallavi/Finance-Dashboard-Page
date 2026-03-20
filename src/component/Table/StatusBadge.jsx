import styles from "./FinanceTable.module.css";

export default function StatusBadge({ status }) {
  let className = "";

  if (status === "Paid") className = styles.statusPaid;
  else if (status === "Pending") className = styles.statusPending;
  else className = styles.statusOverdue;

  return <span className={className}>{status}</span>;
}
