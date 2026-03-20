import StatusBadge from "./StatusBadge";
import styles from "./FinanceTable.module.css";

export default function FinanceTable({ invoices, onInvoiceClick }) {
  return (
    <div>
      <h3>Finance Table</h3>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Invoice No</th>
            <th className={styles.th}>Project Name</th>
            <th className={styles.th}>Client Name</th>
            <th className={styles.th}>Invoice Date</th>
            <th className={styles.th}>Due Date</th>
            <th className={styles.th}>Invoice Amount</th>
            <th className={styles.th}>Received</th>
            <th className={styles.th}>Outstanding</th>
            <th className={styles.th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {invoices && invoices.length > 0 ? (
            invoices.map((item) => {
              const outstanding = item.amount - item.received;
              {
                console.log("Invoices:", invoices);
              }
              return (
                <tr key={item.id} className={styles.row}>
                  <td
                    className={styles.td}
                    onClick={() => onInvoiceClick(item)}
                  >
                    {item.id}
                  </td>
                  <td className={styles.td}>{item.project}</td>
                  <td className={styles.td}>{item.client}</td>
                  <td className={styles.td}>{item.invoiceDate}</td>
                  <td className={styles.td}>{item.dueDate}</td>
                  <td className={styles.td}>₹{item.amount}</td>
                  <td className={styles.td}>₹{item.received}</td>

                  <td
                    className={styles.td}
                    style={{ color: outstanding > 0 ? "red" : "green" }}
                  >
                    ₹{outstanding}
                  </td>

                  <td className={styles.td}>
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
