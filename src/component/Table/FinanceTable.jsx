import { useState, useMemo } from "react";
import StatusBadge from "./StatusBadge";
import styles from "./FinanceTable.module.css";

export default function FinanceTable({ invoices, onInvoiceClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  // ----------------- Search + Filter -----------------
  const filteredInvoices = useMemo(() => {
    let filtered = invoices;

    // Filter by status
    if (filterStatus !== "All") {
      filtered = filtered.filter((inv) => inv.status === filterStatus);
    }

    // Search by project, client, invoice id
    if (search) {
      filtered = filtered.filter(
        (inv) =>
          inv.id.toLowerCase().includes(search.toLowerCase()) ||
          inv.project.toLowerCase().includes(search.toLowerCase()) ||
          inv.client.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        // For numbers
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
        }

        // For strings
        aVal = aVal.toString().toLowerCase();
        bVal = bVal.toString().toLowerCase();
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [invoices, search, filterStatus, sortConfig]);

  // ----------------- Pagination -----------------
  const totalPages = Math.ceil(filteredInvoices.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredInvoices.slice(indexOfFirstRow, indexOfLastRow);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div>
      <h3>Finance Table</h3>

      {/* --------- Search & Filter --------- */}
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search by Invoice / Project / Client"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to first page
          }}
        />

        <select
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Partially Paid">Partially Paid</option>
          <option value="Overdue">Overdue</option>
        </select>
      </div>

      {/* --------- Table --------- */}
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th
              className={styles.th}
              onClick={() => handleSort("id")}
              style={{ cursor: "pointer" }}
            >
              Invoice{" "}
              {sortConfig.key === "id"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th
              className={styles.th}
              onClick={() => handleSort("project")}
              style={{ cursor: "pointer" }}
            >
              Project{" "}
              {sortConfig.key === "project"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th
              className={styles.th}
              onClick={() => handleSort("client")}
              style={{ cursor: "pointer" }}
            >
              Client{" "}
              {sortConfig.key === "client"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th
              className={styles.th}
              onClick={() => handleSort("invoiceDate")}
              style={{ cursor: "pointer" }}
            >
              Invoice Date{" "}
              {sortConfig.key === "invoiceDate"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th
              className={styles.th}
              onClick={() => handleSort("dueDate")}
              style={{ cursor: "pointer" }}
            >
              Due Date{" "}
              {sortConfig.key === "dueDate"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th
              className={styles.th}
              onClick={() => handleSort("amount")}
              style={{ cursor: "pointer" }}
            >
              Amount{" "}
              {sortConfig.key === "amount"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th
              className={styles.th}
              onClick={() => handleSort("received")}
              style={{ cursor: "pointer" }}
            >
              Received{" "}
              {sortConfig.key === "received"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th className={styles.th}>Outstanding</th>
            <th className={styles.th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.length > 0 ? (
            currentRows.map((item) => {
              const outstanding = item.amount - item.received;
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

      {/* --------- Pagination --------- */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
              margin: "0 2px",
            }}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
