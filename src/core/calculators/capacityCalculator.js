import { calculateInternalCapacity } from "./internalCapacity";
import { calculateTotalCapacity } from "./totalCapacity";
import { calculateCapacityGap } from "./capacityGap";
import { calculateUtilization } from "./utilization";
import { calculateManpowerRequirement } from "./manpowerRequirement";
import { createCalculationResult } from "../models/CalculationResult";

/**
 * @param {import("../models/ProductionRequirement").ProductionRequirement} requirement
 * @param {import("../models/SubcontractorInput").SubcontractorInput} [subcontractor]
 * @returns {import("../models/CalculationResult").CalculationResult}
 */
export function calculateCapacity(requirement, subcontractor) {
  const internalCapacity = calculateInternalCapacity(requirement);
  const subconCapacity = subcontractor?.enabled
    ? subcontractor.subconCapacity
    : 0;
  const totalCapacity = calculateTotalCapacity(
    internalCapacity,
    subconCapacity,
  );
  const capacityGap = calculateCapacityGap(
    totalCapacity,
    requirement.requiredDemand,
  );
  const utilization = calculateUtilization(
    requirement.requiredDemand,
    totalCapacity,
  );
  const requiredOperators = calculateManpowerRequirement(
    requirement.numberOfMachines,
  );

  return createCalculationResult({
    requiredDemand: requirement.requiredDemand,
    internalCapacity,
    subconCapacity,
    totalCapacity,
    capacityGap,
    utilization,
    requiredOperators,
  });
}
