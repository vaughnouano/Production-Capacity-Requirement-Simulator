/**
 * @typedef {Object} CalculationResult
 * @property {number} requiredDemand
 * @property {number} internalCapacity
 * @property {number} subconCapacity
 * @property {number} totalCapacity
 * @property {number} capacityGap - positive = surplus, negative = shortage
 * @property {number} utilization - percentage, required demand as % of total capacity
 * @property {number} subconBoostPercent - how much subcon adds over internal-only capacity, as %
 * @property {number} requiredOperators - 1 per machine, Internal Production only
 * @property {'meets-demand'|'shortage'} status
 * @property {string} summary
 */

export function createCalculationResult({
  requiredDemand,
  internalCapacity,
  subconCapacity = 0,
  totalCapacity,
  capacityGap,
  utilization,
  requiredOperators = 0,
}) {
  const status = capacityGap >= 0 ? "meets-demand" : "shortage";

  const subconBoostPercent =
    internalCapacity > 0
      ? ((totalCapacity - internalCapacity) / internalCapacity) * 100
      : 0;

  return {
    requiredDemand,
    internalCapacity,
    subconCapacity,
    totalCapacity,
    capacityGap,
    utilization,
    subconBoostPercent,
    requiredOperators,
    status,
    summary: buildSummary({ internalCapacity, subconCapacity, capacityGap }),
  };
}

function buildSummary({ internalCapacity, subconCapacity, capacityGap }) {
  const verb = capacityGap >= 0 ? "meets" : "falls short of";
  const gapWord = capacityGap >= 0 ? "surplus" : "shortage";
  const gapAmount = Math.abs(capacityGap).toLocaleString();

  if (subconCapacity > 0) {
    return `Internal capacity is ${internalCapacity.toLocaleString()} units, with additional ${subconCapacity.toLocaleString()} units from the subcontractor. Total capacity ${verb} the required demand with a ${gapWord} of ${gapAmount} units.`;
  }

  return `Internal capacity is ${internalCapacity.toLocaleString()} units. Total capacity ${verb} the required demand with a ${gapWord} of ${gapAmount} units.`;
}
