import React, { useState } from "react";
import FinanceTable from "../../component/Table/FinanceTable";
import InvoiceModal from "../../component/Modal/InvoiceModal";
import { invoices } from "../../data/mockData";
import styles from "./Table.module.css"; // ✅ CSS Module import

export default function TableSection() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <FinanceTable invoices={invoices} onInvoiceClick={handleInvoiceClick} />
      </div>

      <div className={styles.modalWrapper}>
        <InvoiceModal
          data={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      </div>
    </div>
  );
}
