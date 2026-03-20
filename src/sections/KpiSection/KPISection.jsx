import KpiCard from "../../component/ KPI/KpiCard";
import styles from "./KpiSection.module.css";
import { formatCurrency } from "../../utils/format.js";
import { calculateKPIs, calculateBonusKPIs } from "../../utils/kpiUtils";
import { invoices } from "../../data/mockData.js";

export default function KPISection() {
  const kpi = calculateKPIs(invoices);
  const bonus = calculateBonusKPIs(invoices);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px",
      }}
    >
      <KpiCard
        className={styles.card}
        title="Total Project Value"
        value={formatCurrency(kpi.totalProjectValue)}
      />

      <KpiCard
        className={styles.card}
        title="Total Billed Amount"
        value={formatCurrency(kpi.totalBilled)}
      />

      <KpiCard
        className={styles.card}
        title="Total Received Amount"
        value={formatCurrency(kpi.totalReceived)}
      />

      <KpiCard
        className={styles.card}
        title="Outstanding Amount"
        value={formatCurrency(kpi.outstandingAmount)}
      />

      <KpiCard
        className={styles.card}
        title="This Month Billing"
        value={formatCurrency(kpi.thisMonthBilling)}
      />

      <KpiCard
        className={styles.card}
        title="Overdue Payments"
        value={formatCurrency(kpi.overdue)}
      />

      {/* BONUS */}
      <KpiCard
        className={styles.card}
        title="Vendor Payables"
        value={formatCurrency(bonus.vendorPayables)}
      />

      <KpiCard
        className={styles.card}
        title="Budget vs Actual Variance"
        value={formatCurrency(bonus.variance)}
      />
    </div>
  );
}
