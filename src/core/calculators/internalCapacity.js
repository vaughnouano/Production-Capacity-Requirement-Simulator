/**
 * @param {import("../models/ProductionRequirement").ProductionRequirement} params
 * @returns {number} internal capacity in whole units
 */
export function calculateInternalCapacity({
  numberOfMachines,
  workingHoursPerDay,
  workingDays,
  cycleTimeSeconds,
  efficiencyPercent,
  availabilityPercent,
}) {
  if (
    !numberOfMachines ||
    !workingHoursPerDay ||
    !workingDays ||
    !cycleTimeSeconds
  ) {
    return 0;
  }

  const totalAvailableSeconds =
    numberOfMachines * workingHoursPerDay * workingDays * 3600;

  const theoreticalUnits = totalAvailableSeconds / cycleTimeSeconds;

  const efficiencyFactor = (efficiencyPercent ?? 100) / 100;
  const availabilityFactor = (availabilityPercent ?? 100) / 100;

  return Math.floor(theoreticalUnits * efficiencyFactor * availabilityFactor);
}
