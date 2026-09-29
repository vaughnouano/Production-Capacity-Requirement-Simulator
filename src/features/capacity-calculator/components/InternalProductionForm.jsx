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

export default function InternalProductionForm() {
  return (
    <Card className="max-w-[550px] h-fit p-0">
      {/*  */}
      <CardHeader className="border-b p-4">
        <CardTitle>Calculator</CardTitle>
        <CardAction>Icon</CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 ">
        {/* ACTIVE - Internal Production */}
        <Card className="h-fit p-0 shadow-lg">
          <CardHeader className="bg-mauve-50 border-b p-6">
            <CardTitle>Internal Production</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 h-full p-6 pt-0">
            <div className="flex flex-col w-full">
              <Field>
                <FieldLabel htmlFor="input1">Required Demand</FieldLabel>
                <Input id="label" />

                <FieldLabel htmlFor="input1">Operators (Optional)</FieldLabel>
                <Input id="label" />

                <FieldLabel htmlFor="input1">Working Days</FieldLabel>
                <Input id="label" />

                <FieldLabel htmlFor="input1">Efficiency</FieldLabel>
                <Input id="label" />
              </Field>
            </div>
            <div className="flex flex-col w-full">
              <Field>
                <FieldLabel htmlFor="input1">Number of Machines</FieldLabel>
                <Input id="label" />

                <FieldLabel htmlFor="input1">Working Hours per Day</FieldLabel>
                <Input id="label" />

                <FieldLabel htmlFor="input1">Cycle Time</FieldLabel>
                <Input id="label" />

                <FieldLabel htmlFor="input1">Availability</FieldLabel>
                <Input id="label" />
              </Field>
            </div>
          </CardContent>
        </Card>
        {/* OPTIONAL - Subcon */}
        <SubcontractorForm />
      </CardContent>
      <CardFooter className="bg-transparent flex justify-end gap-3">
        <Button variant="outline" className="h-fit pt-2.5 pb-2.5 px-6">
          Reset
        </Button>
        <Button variant="default" className="h-fit pt-2.5 pb-2.5 px-6">
          Calculate
        </Button>
      </CardFooter>
    </Card>
  );
}
