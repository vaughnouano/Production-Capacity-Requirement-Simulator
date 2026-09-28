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

export default function CreateScenarioForm(params) {
  return (
    <Card className="max-w-[550px] h-fit p-0">
      {/*  */}
      <CardHeader className="border-b p-4">
        <CardTitle>What-if Scenario</CardTitle>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 ">
        {/* ====================== SCENARIO DETAIL ====================== */}
        <Card className="pt-0 shadow-lg">
          <CardHeader className="bg-mauve-50 p-6">
            <CardTitle>Scenario Detail</CardTitle>
          </CardHeader>
          <CardContent>
            <Field className="flex flex-row w-full gap-4 px-0">
              <Field>
                <FieldLabel htmlFor="input1">Required Demand</FieldLabel>
                <Input id="label" />
              </Field>

              <Field>
                <FieldLabel htmlFor="input1">Required Demand</FieldLabel>
                <Input id="label" />
              </Field>
            </Field>
          </CardContent>
        </Card>
        {/*  ====================== CHANGES ======================  */}
        <Card className="h-fit pt-0 shadow-lg">
          <CardHeader className="h-full bg-mauve-50 p-6 ">
            <CardTitle>Changes</CardTitle>
          </CardHeader>

          <CardContent className="flex gap-4 h-full p-6 pt-0">
            <div className="flex flex-col w-full">
              <Field>
                <div className="flex gap-3.5">
                  <Field>
                    <FieldLabel htmlFor="input1">Number of Machines</FieldLabel>
                    <Input id="label" />
                  </Field>
                  <div className="flex flex-col justify-end w-full">
                    <Input placeholder="Output" />
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <Field>
                    <FieldLabel htmlFor="input1">Working Hours</FieldLabel>
                    <Input id="label" />
                  </Field>
                  <div className="flex flex-col justify-end w-full">
                    <Input placeholder="Output" />
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <Field>
                    <FieldLabel htmlFor="input1">Efficiency</FieldLabel>
                    <Input id="label" />
                  </Field>
                  <div className="flex flex-col justify-end w-full">
                    <Input placeholder="Output" />
                  </div>
                </div>
              </Field>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter className="bg-transparent flex justify-end gap-3">
        <Button variant="outline" className="h-fit pt-2.5 pb-2.5 px-6">
          Cancel
        </Button>
        <Button variant="default" className="h-fit pt-2.5 pb-2.5 px-6">
          Run Scenario
        </Button>
      </CardFooter>
    </Card>
  );
}
