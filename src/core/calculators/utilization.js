/** Required demand as a % of total capacity. Can exceed 100% if demand outstrips supply. */
export function calculateUtilization(requiredDemand, totalCapacity) {
  if (!totalCapacity) return 0;
  return (requiredDemand / totalCapacity) * 100;
}
