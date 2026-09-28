import Styles from "./App.module.css";
import AppShell from "./AppShell";

import ProductPeriodHeader from "@/features/capacity-calculator/components/ProductPeriodHeader";
import { Separator } from "@/components/ui/separator";

import CreateScenarioForm from "@/features/what-if-scenarios/components/CreateScenarioForm";
import ScenarioResultPanel from "@/features/what-if-scenarios/components/ScenarioResultPanel";

export default function App() {
  return (
    <AppShell>
      <div className={Styles.container}>
        <div className="flex flex-col gap-16 w-full">
          <ProductPeriodHeader />
          <Separator />
          <div className="flex justify-center gap-6">
            <CreateScenarioForm />
            <ScenarioResultPanel />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
