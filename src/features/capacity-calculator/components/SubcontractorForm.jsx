import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Switch } from "@/components/ui/switch";

export default function SubcontractorForm() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardAction>
          <Switch />
        </CardAction>
        <CardTitle>Subcon</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4">
        <div className="flex flex-col w-full">
          <Field>
            <FieldLabel htmlFor="input1" className="opacity-50">
              Required Demand
            </FieldLabel>
            <Input id="label" />

            <FieldLabel htmlFor="input1" className="opacity-50">
              Operators (Optional)
            </FieldLabel>
            <Input id="label" />

            <FieldLabel htmlFor="input1" className="opacity-50">
              Working Days
            </FieldLabel>
            <Input id="label" />
          </Field>
        </div>
        <div className="flex flex-col w-full">
          <Field>
            <FieldLabel htmlFor="input1" className="opacity-50">
              Required Demand
            </FieldLabel>
            <Input id="label" />

            <FieldLabel htmlFor="input1" className="opacity-50">
              Operators (Optional)
            </FieldLabel>
            <Input id="label" />

            <FieldLabel htmlFor="input1" className="opacity-50">
              Working Days
            </FieldLabel>
            <Input id="label" />
          </Field>
        </div>
      </CardContent>
    </Card>
  );
}
