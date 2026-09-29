import { calculateCapacity } from "./capacityCalculator";

/**
 * Re-runs the calculation with a baseline requirement overridden by
 * a partial set of changes (what-if scenario deltas).
 *
 * @param {import("../models/ProductionRequirement").ProductionRequirement} baseline
 * @param {Partial<import("../models/ProductionRequirement").ProductionRequirement>} changes
 * @param {import("../models/SubcontractorInput").SubcontractorInput} [subcontractor]
 * @returns {import("../models/CalculationResult").CalculationResult}
 */
export function runScenario(baseline, changes = {}, subcontractor) {
  return calculateCapacity({ ...baseline, ...changes }, subcontractor);
}
