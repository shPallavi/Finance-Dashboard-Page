export function getMonthlyTrend(data) {
  const map = {};

  data.forEach((inv) => {
    const month = inv.invoiceDate.slice(0, 7); // "2025-03"

    if (!map[month]) {
      map[month] = { month, billed: 0, received: 0 };
    }

    map[month].billed += inv.amount;
    map[month].received += inv.received;
  });

  return Object.values(map);
}

export function getStatusData(data) {
  const map = {};

  data.forEach((inv) => {
    if (!map[inv.status]) {
      map[inv.status] = 0;
    }
    map[inv.status]++;
  });

  return Object.keys(map).map((key) => ({
    name: key,
    value: map[key],
  }));
}
