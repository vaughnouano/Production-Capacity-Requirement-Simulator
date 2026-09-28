import Styles from "./App.module.css";
import AppShell from "./AppShell";

import ProductPeriodHeader from "@/features/capacity-calculator/components/ProductPeriodHeader";
import { Separator } from "@/components/ui/separator";

import InternalProductionForm from "@/features/capacity-calculator/components/InternalProductionForm";
import CalculationResultPanel from "@/features/capacity-calculator/components/CalculationResultPanel";

export default function App() {
  return (
    <AppShell>
      {/* ============= DO NOT TOUCH =============*/}
      <div className={Styles.container}>
        <div className="flex flex-col gap-16 w-full">
          <ProductPeriodHeader />
          <Separator />
          {/*============= DO NOT TOUCH =============*/}

          {/* Place components here */}
          <div className="flex justify-center gap-6">
            <InternalProductionForm />
            <CalculationResultPanel />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
