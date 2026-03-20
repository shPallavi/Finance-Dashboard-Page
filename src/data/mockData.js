export const invoices = [
  {
    id: "INV-001",
    project: "Alpha",
    client: "TCS",
    invoiceDate: "2025-03-01",
    dueDate: "2025-03-10",
    amount: 100000,
    received: 60000,
    status: "Partially Paid",
  },
  {
    id: "INV-002",
    project: "Beta",
    client: "Infosys",
    invoiceDate: "2025-02-01",
    dueDate: "2025-02-10",
    amount: 200000,
    received: 200000,
    status: "Paid",
  },
  {
    id: "INV-003",
    project: "Gamma",
    client: "Wipro",
    invoiceDate: "2025-01-01",
    dueDate: "2025-01-10",
    amount: 150000,
    received: 50000,
    status: "Overdue", // ⭐ important
  },
];

export const chartData = [
  { month: "Jan", billed: 400000, received: 300000 },
  { month: "Feb", billed: 300000, received: 250000 },
  { month: "Mar", billed: 500000, received: 400000 },
];
