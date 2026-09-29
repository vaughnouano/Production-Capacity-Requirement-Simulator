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
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full">
          <Field className="flex flex-row">
            <Field>
              <FieldLabel htmlFor="input1" className="opacity-50">
                Subcontractor Name
              </FieldLabel>
              <Input id="label" />
            </Field>

            <Field>
              <FieldLabel htmlFor="input1" className="opacity-50">
                Subcon Capacity
              </FieldLabel>
              <Input id="label" />
            </Field>

            <Field>
              <FieldLabel htmlFor="input1" className="opacity-50">
                Planning Period
              </FieldLabel>
              <Input id="label" />
            </Field>
          </Field>
        </div>
        <div className="flex w-full">
          <Field className="flex flex-row">
            <Field>
              <FieldLabel htmlFor="input1" className="opacity-50">
                Leading Time
              </FieldLabel>
              <Input id="label" />
            </Field>

            <Field>
              <FieldLabel htmlFor="input1" className="opacity-50">
                Notes
              </FieldLabel>
              <Input id="label" placeholder="optional" />
            </Field>
          </Field>
        </div>
      </CardContent>
    </Card>
  );
}
