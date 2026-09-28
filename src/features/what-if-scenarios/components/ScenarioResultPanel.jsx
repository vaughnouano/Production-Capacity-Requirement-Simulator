import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function ScenarioResultPanel(params) {
  return (
    <Card className="max-w-[550px] w-full h-fit p-0">
      <CardHeader className="p-4">
        <CardTitle>Result</CardTitle>
        <CardAction></CardAction>
      </CardHeader>
      {/*  */}
      <CardContent className="flex flex-col gap-2 pb-4">
        {/* Estimated Capacity */}
        <Card className="bg-mauve-50 shadow-lg pt-0">
          <CardHeader className="p-4">
            <CardTitle>Estimated Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            D<div></div>
            <div>
              <p className="text-3xl px-2 py-1 font-medium">55,080 units</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          {/* Capacity Gap */}
          <Card className="w-full bg-mauve-50 shadow-lg pt-0">
            <CardHeader className="p-4">
              <CardTitle>Capacity Gap</CardTitle>
            </CardHeader>
            <CardContent>
              <div></div>
              <div>
                <p className="text-3xl px-2 py-1 font-medium">5,080 units</p>
              </div>
            </CardContent>
          </Card>
          {/* Capacity Gap */}
          <Card className="w-full bg-mauve-50 shadow-lg pt-0">
            <CardHeader className="p-4">
              <CardTitle>Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div></div>
              <div>
                <p className="text-3xl px-2 py-1 font-medium">90.7 %</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      {/*  */}
      <CardFooter className="bg-transparent">
        <Card className="bg-mauve-50 w-full px-1.5">
          <CardContent>
            <div></div>
            <p className="text-md">
              This scenario meets the requirement demand
            </p>
          </CardContent>
        </Card>
      </CardFooter>
    </Card>
  );
}
