import { navConfig } from "./navConfig";

export default function SectionRouter({
  activeSection,
  calculationResult,
  onCalculationResultChange,
}) {
  const [, pageSlug] = (activeSection ?? "").split("/");
  const View = navConfig[pageSlug];

  if (!View) {
    return (
      <div className="text-neutral-500 text-sm">
        Select a page from the sidebar.
      </div>
    );
  }

  return (
    <View
      calculationResult={calculationResult}
      onCalculationResultChange={onCalculationResultChange}
    />
  );
}
