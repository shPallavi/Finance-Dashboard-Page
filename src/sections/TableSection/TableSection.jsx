import React, { useState } from "react";
import FinanceTable from "../../component/Table/FinanceTable";

import InvoiceModal from "../../component/Modal/InvoiceModal";
import { invoices } from "../../data/mockData";

export default function TableSection() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  return (
    <>
      <FinanceTable invoices={invoices} onInvoiceClick={handleInvoiceClick} />
      <InvoiceModal
        data={selectedInvoice}
        onClose={() => setSelectedInvoice(null)}
      />
    </>
  );
}
