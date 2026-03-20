import ChartSection from "../sections/ChartSection/ChartSection";
import Header from "../sections/Header/Header";
import KpiSection from "../sections/KpiSection/KPISection";
import TableSection from "../sections/TableSection/TableSection";
import BilledVsReceivedChart from "../component/Charts/BilledVsReceivedChart";
import StatusPieChart from "../component/Charts/StatusPieChart";
import styles from "./Dashboard.module.css";
import { invoices } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.section}>
        <Header />
      </div>

      <div className={`${styles.section} ${styles.kpiWrapper}`}>
        <KpiSection />
      </div>

      <div className={`${styles.section} ${styles.bottomSection}`}>
        <TableSection />
        <ChartSection />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <BilledVsReceivedChart data={invoices} />
        <StatusPieChart data={invoices} />
      </div>
    </div>
  );
}
