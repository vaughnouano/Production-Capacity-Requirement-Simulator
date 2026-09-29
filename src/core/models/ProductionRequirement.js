/**
 * @typedef {Object} ProductionRequirement
 * @property {string} productId
 * @property {string} planningPeriod
 * @property {number} requiredDemand
 * @property {number} numberOfMachines
 * @property {number|null} operators - captured but not yet used in any calculation (see note)
 * @property {number} workingHoursPerDay
 * @property {number} workingDays
 * @property {number} cycleTimeSeconds
 * @property {number} efficiencyPercent - 0-100
 * @property {number} availabilityPercent - 0-100
 */

export function createProductionRequirement(overrides = {}) {
  return {
    productId: "",
    planningPeriod: "1-week",
    requiredDemand: 0,
    numberOfMachines: 0,
    operators: null,
    workingHoursPerDay: 8,
    workingDays: 5,
    cycleTimeSeconds: 0,
    efficiencyPercent: 100,
    availabilityPercent: 100,
    ...overrides,
  };
}
