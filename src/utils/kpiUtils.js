// utils/kpiUtils.js

export function calculateKPIs(data) {
  let totalProjectValue = 0;
  let totalBilled = 0;
  let totalReceived = 0;
  let overdue = 0;
  let thisMonthBilling = 0;

  const currentMonth = new Date().toISOString().slice(0, 7);

  data.forEach((inv) => {
    totalProjectValue += inv.amount;
    totalBilled += inv.amount;
    totalReceived += inv.received;

    // Outstanding
    const outstanding = inv.amount - inv.received;

    // Overdue
    if (new Date(inv.dueDate) < new Date() && outstanding > 0) {
      overdue += outstanding;
    }

    // This Month Billing
    if (inv.invoiceDate.slice(0, 7) === currentMonth) {
      thisMonthBilling += inv.amount;
    }
  });

  const outstandingAmount = totalBilled - totalReceived;

  return {
    totalProjectValue,
    totalBilled,
    totalReceived,
    outstandingAmount,
    thisMonthBilling,
    overdue,
  };
}

export function calculateBonusKPIs(data) {
  let vendorPayables = 0;
  let budget = 0;
  let actual = 0;

  data.forEach((inv) => {
    // Mock logic (you can enhance later)
    vendorPayables += inv.amount * 0.2; // assume 20% cost
    budget += inv.amount;
    actual += inv.received;
  });

  const variance = budget - actual;

  return {
    vendorPayables,
    variance,
  };
}
