import Styles from "./App.module.css";

import CalculationResultPanel from "@/features/capacity-calculator/components/CalculationResultPanel";
import InternalProductionForm from "@/features/capacity-calculator/components/InternalProductionForm";
import ProductPeriodHeader from "@/features/capacity-calculator/components/ProductPeriodHeader";

export default function App() {
  return (
    <div className={Styles.container}>
      <div className="flex flex-col gap-16 w-full">
        <ProductPeriodHeader />
        <div className="flex justify-center gap-6">
          <InternalProductionForm />
          <CalculationResultPanel />
        </div>
      </div>
    </div>
  );
}
