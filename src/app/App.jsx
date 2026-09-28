import Styles from "./App.module.css";
import AppShell from "./AppShell";

import ProductPeriodHeader from "@/features/capacity-calculator/components/ProductPeriodHeader";
import { Separator } from "@/components/ui/separator";

import LayoutScenarioComparison from "@/features/what-if-scenarios/components/LayoutScenarioComparison";

export default function App() {
  return (
    <AppShell>
      <div className={Styles.container}>
        <div className="flex flex-col gap-16 w-full">
          <ProductPeriodHeader />
          <Separator />
          <div className="flex justify-center gap-6">
            <LayoutScenarioComparison />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
