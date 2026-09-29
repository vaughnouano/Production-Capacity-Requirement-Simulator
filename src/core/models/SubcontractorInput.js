/**
 * @typedef {Object} SubcontractorInput
 * @property {boolean} enabled
 * @property {string} name
 * @property {number} subconCapacity
 * @property {string} planningPeriod
 * @property {number|null} leadTimeDays
 * @property {string} notes
 */

export function createSubcontractorInput(overrides = {}) {
  return {
    enabled: false,
    name: "",
    subconCapacity: 0,
    planningPeriod: "1-week",
    leadTimeDays: null,
    notes: "",
    ...overrides,
  };
}
