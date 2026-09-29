import CalculatorPage from "@/features/capacity-calculator/CalculatorPage";

import HeaderCalculationResult from "@/features/dashboard/components/HeaderCalculationResult";
import RequiredDemandCapacityChart from "@/features/dashboard/components/RequiredDemandCapacityChart";

import CreateScenarioForm from "@/features/what-if-scenarios/components/CreateScenarioForm";
import ScenarioResultPanel from "@/features/what-if-scenarios/components/ScenarioResultPanel";

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
  calculator: CalculatorPage,
  "what-if": WhatIfView,
};
