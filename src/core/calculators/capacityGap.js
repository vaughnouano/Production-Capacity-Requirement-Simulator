/** Positive = surplus, negative = shortage */
export function calculateCapacityGap(totalCapacity, requiredDemand) {
  return (totalCapacity || 0) - (requiredDemand || 0);
}
