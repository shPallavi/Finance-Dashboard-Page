import { useState } from "react";
import styles from "./FilterBar.module.css";

export default function FilterBar() {
  const [search, setSearch] = useState("");
  const [project, setProject] = useState("All Projects");
  const [status, setStatus] = useState("Status");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className={styles.select}
        value={project}
        onChange={(e) => setProject(e.target.value)}
      >
        <option>All Projects</option>
        <option>Alpha</option>
        <option>Beta</option>
        <option>Gamma</option>
      </select>

      <select
        className={styles.select}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Status</option>
        <option>Paid</option>
        <option>Pending</option>
      </select>

      <div className={styles.dateRange}>
        <input
          type="date"
          className={styles.date}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <span>to</span>
        <input
          type="date"
          className={styles.date}
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <button className={styles.button}>Export</button>
    </div>
  );
}
