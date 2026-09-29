import { useState } from "react";
import { createProductionRequirement } from "@/core/models/ProductionRequirement";
import { createSubcontractorInput } from "@/core/models/SubcontractorInput";
import { calculateCapacity } from "@/core/calculators/capacityCalculator";

export function useCapacityCalculator({ onResultChange } = {}) {
  const [requirement, setRequirement] = useState(createProductionRequirement());
  const [subcontractor, setSubcontractor] = useState(
    createSubcontractorInput(),
  );

  const updateRequirementField = (field, value) => {
    setRequirement((prev) => ({ ...prev, [field]: value }));
  };

  const calculate = () => {
    const result = calculateCapacity(requirement, subcontractor);
    onResultChange?.(result);
  };

  const reset = () => {
    setRequirement(createProductionRequirement());
    setSubcontractor(createSubcontractorInput());
    onResultChange?.(null);
  };

  return {
    requirement,
    subcontractor,
    updateRequirementField,
    calculate,
    reset,
  };
}
