/**
 * Required manpower for Internal Production.
 * Fixed 1:1 ratio — one operator per machine.
 *
 * @param {number} numberOfMachines
 * @returns {number} required number of operators
 */
export function calculateManpowerRequirement(numberOfMachines) {
  return numberOfMachines || 0;
}
