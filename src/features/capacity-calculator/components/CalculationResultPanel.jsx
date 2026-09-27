import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CalculationResultPanel() {
  return (
    <Card className="w-[550px] h-fit">
      <CardHeader>
        <CardTitle>Calculation Result</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 border-t p-4 ">
        {/*  */}
        <Card className="py-6 px-3">
          <CardHeader>
            <CardTitle>Estimated Capacity</CardTitle>
            <CardContent className="pt-6 pb-6 px-0">
              <p className="text-3xl font-medium">50,000</p>
            </CardContent>
          </CardHeader>
        </Card>
        <div className="flex flex-row gap-4">
          <Card className="w-full py-6 px-3">
            <CardHeader>
              <CardTitle>Capacity Gap</CardTitle>
              <CardContent className="pt-6 pb-6 px-0">
                <p className="text-3xl font-medium">5,080</p>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="w-full py-6 px-3">
            <CardHeader>
              <CardTitle>Utilization</CardTitle>
              <CardContent className="pt-6 pb-6 px-0">
                <p className="text-3xl font-medium">90.7</p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        {/*  */}
      </CardContent>
      <CardFooter className="bg-transparent border-0"></CardFooter>
    </Card>
  );
}
