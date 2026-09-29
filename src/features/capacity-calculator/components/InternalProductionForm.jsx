import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import SubcontractorForm from "@/features/capacity-calculator/components/SubcontractorForm";

export default function InternalProductionForm({
  requirement,
  onFieldChange,
  onCalculate,
  onReset,
}) {
  const handleNumberChange = (field) => (e) => {
    onFieldChange(field, Number(e.target.value));
  };

  return (
    <Card className="max-w-[550px] h-fit p-0">
      <CardHeader className="border-b p-4">
        <CardTitle>Calculator</CardTitle>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 ">
        <Card className="h-fit p-0 shadow-lg">
          <CardHeader className="bg-mauve-50 border-b p-6">
            <CardTitle>Internal Production</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 h-full p-6 pt-0">
            <div className="flex flex-col w-full">
              <Field>
                <FieldLabel htmlFor="requiredDemand">
                  Required Demand
                </FieldLabel>
                <Input
                  id="requiredDemand"
                  type="number"
                  value={requirement.requiredDemand}
                  onChange={handleNumberChange("requiredDemand")}
                />

                <FieldLabel htmlFor="operators">
                  Operators (Optional)
                </FieldLabel>
                <Input
                  id="operators"
                  type="number"
                  value={requirement.operators ?? ""}
                  onChange={handleNumberChange("operators")}
                />

                <FieldLabel htmlFor="workingDays">Working Days</FieldLabel>
                <Input
                  id="workingDays"
                  type="number"
                  value={requirement.workingDays}
                  onChange={handleNumberChange("workingDays")}
                />

                <FieldLabel htmlFor="efficiencyPercent">Efficiency</FieldLabel>
                <Input
                  id="efficiencyPercent"
                  type="number"
                  value={requirement.efficiencyPercent}
                  onChange={handleNumberChange("efficiencyPercent")}
                />
              </Field>
            </div>
            <div className="flex flex-col w-full">
              <Field>
                <FieldLabel htmlFor="numberOfMachines">
                  Number of Machines
                </FieldLabel>
                <Input
                  id="numberOfMachines"
                  type="number"
                  value={requirement.numberOfMachines}
                  onChange={handleNumberChange("numberOfMachines")}
                />

                <FieldLabel htmlFor="workingHoursPerDay">
                  Working Hours per Day
                </FieldLabel>
                <Input
                  id="workingHoursPerDay"
                  type="number"
                  value={requirement.workingHoursPerDay}
                  onChange={handleNumberChange("workingHoursPerDay")}
                />

                <FieldLabel htmlFor="cycleTimeSeconds">Cycle Time</FieldLabel>
                <Input
                  id="cycleTimeSeconds"
                  type="number"
                  value={requirement.cycleTimeSeconds}
                  onChange={handleNumberChange("cycleTimeSeconds")}
                />

                <FieldLabel htmlFor="availabilityPercent">
                  Availability
                </FieldLabel>
                <Input
                  id="availabilityPercent"
                  type="number"
                  value={requirement.availabilityPercent}
                  onChange={handleNumberChange("availabilityPercent")}
                />
              </Field>
            </div>
          </CardContent>
        </Card>

        <SubcontractorForm />
      </CardContent>
      <CardFooter className="bg-transparent flex justify-end gap-3">
        <Button
          variant="outline"
          className="h-fit pt-2.5 pb-2.5 px-6"
          onClick={onReset}
        >
          Reset
        </Button>
        <Button
          variant="default"
          className="h-fit pt-2.5 pb-2.5 px-6"
          onClick={onCalculate}
        >
          Calculate
        </Button>
      </CardFooter>
    </Card>
  );
}
