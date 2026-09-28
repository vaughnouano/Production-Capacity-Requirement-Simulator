import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CollapsibleFileTree() {
  const fileTree = [
    {
      name: "Vivo TWS Earbuds",
      items: [
        { name: "Dashboard" },
        { name: "Calculator" },
        { name: "What-if" },
      ],
    },
    {
      name: "Moto Buds 2 Plus",
      items: [
        { name: "Dashboard" },
        { name: "Calculator" },
        { name: "What-if" },
      ],
    },
    {
      name: "boAt - Nirvana X Earbuds",
      items: [
        { name: "Dashboard" },
        { name: "Calculator" },
        { name: "What-if" },
      ],
    },
  ];

  const renderItem = (fileItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
                {/* <FolderIcon /> */}
                {fileItem.name}
              </Button>
            }
          />
          <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="w-full justify-start gap-2  text-neutral-500"
      >
        {/* <FileIcon /> */}
        <span>{fileItem.name}</span>
      </Button>
    );
  };

  return (
    <div
      className="border-0 mx-auto w-full max-w-[16rem] gap-2 bg-transparent"
      size="sm"
    >
      <CardContent>
        <div className="flex flex-col gap-1 ">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </div>
  );
}
