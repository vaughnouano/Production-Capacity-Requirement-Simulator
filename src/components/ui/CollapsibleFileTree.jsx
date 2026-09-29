import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const PAGES = [
  { name: "Dashboard" },
  { name: "Calculator" },
  { name: "What-if" },
];

export function CollapsibleFileTree({ products = [], onSelect }) {
  const fileTree = products.map((name) => ({
    name,
    items: PAGES,
  }));

  const renderItem = (fileItem, parentSlug = null) => {
    if ("items" in fileItem) {
      const productSlug = slugify(fileItem.name);
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
                {fileItem.name}
              </Button>
            }
          />
          <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child, productSlug))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    const key = parentSlug
      ? `${parentSlug}/${slugify(fileItem.name)}`
      : slugify(fileItem.name);

    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        onClick={() => onSelect?.(key)}
        className="w-full justify-start gap-2 text-neutral-500"
      >
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
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </div>
  );
}
