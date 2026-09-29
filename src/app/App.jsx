import { useState } from "react";
import Styles from "./App.module.css";
import AppShell from "./AppShell";
import SectionRouter from "./navigation/SectionRouter";

import ProductPeriodHeader from "@/features/capacity-calculator/components/ProductPeriodHeader";
import { Separator } from "@/components/ui/separator";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const INITIAL_PRODUCTS = [
  "Vivo TWS Earbuds",
  "Moto Buds 2 Plus",
  "boAt - Nirvana X Earbuds",
];

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeSection, setActiveSection] = useState(
    "vivo-tws-earbuds/calculator",
  );

  // Resolve the display name for the currently active product
  const [productSlug] = activeSection.split("/");
  const activeProductName =
    products.find((p) => slugify(p) === productSlug) ?? null;

  const handleAddProduct = (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    const slug = slugify(trimmed);
    const exists = products.some((p) => slugify(p) === slug);
    if (exists) return;

    setProducts((prev) => [...prev, trimmed]);
    setActiveSection(`${slug}/calculator`);
  };

  return (
    <AppShell
      products={products}
      onSelect={setActiveSection}
      onAddProduct={handleAddProduct}
    >
      <div className={Styles.container}>
        <div className="flex flex-col gap-16 w-full">
          <ProductPeriodHeader productName={activeProductName} />
          <Separator />
          <SectionRouter activeSection={activeSection} />
        </div>
      </div>
    </AppShell>
  );
}
