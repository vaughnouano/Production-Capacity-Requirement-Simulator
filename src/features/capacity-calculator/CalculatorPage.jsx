import InternalProductionForm from "@/features/capacity-calculator/components/InternalProductionForm";
import CalculationResultPanel from "@/features/capacity-calculator/components/CalculationResultPanel";
import { useCapacityCalculator } from "@/features/capacity-calculator/hooks/useCapacityCalculator";

export default function CalculatorPage({
  calculationResult,
  onCalculationResultChange,
}) {
  const { requirement, updateRequirementField, calculate, reset } =
    useCapacityCalculator({ onResultChange: onCalculationResultChange });

  return (
    <div className="flex justify-center gap-6">
      <InternalProductionForm
        requirement={requirement}
        onFieldChange={updateRequirementField}
        onCalculate={calculate}
        onReset={reset}
      />
      <CalculationResultPanel result={calculationResult} />
    </div>
  );
}
