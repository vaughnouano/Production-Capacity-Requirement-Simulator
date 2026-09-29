import InternalProductionForm from "@/features/capacity-calculator/components/InternalProductionForm";
import CalculationResultPanel from "@/features/capacity-calculator/components/CalculationResultPanel";

import HeaderCalculationResult from "@/features/dashboard/components/HeaderCalculationResult";
import RequiredDemandCapacityChart from "@/features/dashboard/components/RequiredDemandCapacityChart";

import CreateScenarioForm from "@/features/what-if-scenarios/components/CreateScenarioForm";
import ScenarioResultPanel from "@/features/what-if-scenarios/components/ScenarioResultPanel";

const CalculatorView = () => (
  <div className="flex justify-center gap-6">
    <InternalProductionForm />
    <CalculationResultPanel />
  </div>
);

const DashboardView = () => (
  <div className="flex flex-col gap-6 w-full">
    <HeaderCalculationResult />
    <RequiredDemandCapacityChart />
  </div>
);

const WhatIfView = () => (
  <div className="flex justify-center gap-6">
    <CreateScenarioForm />
    <ScenarioResultPanel />
  </div>
);

export const navConfig = {
  dashboard: DashboardView,
  calculator: CalculatorView,
  "what-if": WhatIfView,
};
