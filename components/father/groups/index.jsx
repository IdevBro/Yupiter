import { ScrollArea } from "@/components/ui/scroll-area";

export default function Group() {
  return (
    <ScrollArea className="h-[100vh] w-30 rounded-md border border-gray-300">
      <div className="p-4">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="text-sm py-2 border-b">
            nF {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
