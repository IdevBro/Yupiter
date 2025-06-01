import { ScrollArea } from "@/components/ui/scroll-area";

export default function Sidebar() {
  return (
    <ScrollArea className="h-[100vh] w-[150px]  border border-gray-300">
      <div className="p-[15px]">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="text-sm py-2 border-b">
            <p className="text-[18px] font-bold"> nF {i + 1}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
